import { chromium } from "playwright-core";
import { mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = process.argv[2] ?? "http://127.0.0.1:5174";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const cases = [
  ["/product-menu/", "전체 제품"],
  ["/product-menu/rfid/", "RFID Reader / N₂"],
  ["/product-menu/rfid-reader-hm12/", "HM12"],
  ["/company_intro/", "CEO 인사말"],
  ["/company_intro/core-competencies/", "핵심역량"],
  ["/company_tech/", "보유 기술"],
  ["/about/faq/", "FAQ"],
  ["/exh/", "캔탑스 소식"],
  ["/blog/2026/04/10/2026-semicon-southeast-asia/", "2026 SEMICON Southeast Asia"],
  ["/contact_usa/", "USA"],
  ["/job/", "채용공고"],
  ["/office-gallery/", "사무실 전경"],
  ["/eng/", "English"],
];

const browser = await chromium.launch({ headless: true, executablePath: chromePath });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const screenshotDir = resolve("qa", "routing");
await mkdir(screenshotDir, { recursive: true });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));

const results = [];
for (const [path, expectedHeading] of cases) {
  await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(120);
  const heading = (await page.locator("main h1").first().textContent())?.trim() ?? "";
  results.push({
    path,
    heading,
    expectedHeading,
    passed: heading.includes(expectedHeading),
    mainCount: await page.locator("main#main-content").count(),
    homeHeroPresent: await page.locator(".hero").count(),
    horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1),
  });
}

const dataSource = await readFile(resolve("src", "data", "siteData.ts"), "utf8");
const linkedPaths = [...new Set([...dataSource.matchAll(/href:\s*"([^"#]+)"/g)].map((match) => match[1]))];
const routeFailures = [];
let productDetailCount = 0;
const productDetailFailures = [];
for (const path of linkedPaths) {
  await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
  const heading = (await page.locator("main h1").first().textContent())?.trim() ?? "";
  const mainCount = await page.locator("main#main-content").count();
  if (!heading || heading === "페이지를 찾을 수 없습니다" || mainCount !== 1) {
    routeFailures.push({ path, heading, mainCount });
  }
  if (await page.locator(".product-detail").count()) {
    productDetailCount += 1;
    const features = await page.locator(".product-feature-section .depth-item").count();
    if (features < 3) productDetailFailures.push({ path, features });
  }
}

const contentSource = await readFile(resolve("src", "data", "pageContent.ts"), "utf8");
const depthPaths = [...contentSource.matchAll(/^\s{2}"(\/[^"\n]+\/)": \{/gm)].map((match) => match[1]);
const depthFailures = [];
for (const path of depthPaths) {
  await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
  const metrics = await page.evaluate(() => ({
    pagePath: document.querySelector("main")?.getAttribute("data-page-path"),
    sections: document.querySelectorAll(".depth-section").length,
    items: document.querySelectorAll(".depth-item, .depth-faq details").length,
    horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    overflowElements: Array.from(document.querySelectorAll("body *"))
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.right > window.innerWidth + 1 || rect.left < -1);
      })
      .slice(0, 5)
      .map((element) => ({
        tag: element.tagName,
        className: element.className?.toString().slice(0, 80) ?? "",
        text: element.textContent?.trim().slice(0, 80) ?? "",
      })),
  }));
  if (metrics.pagePath !== path || metrics.sections < 1 || metrics.items < 2 || metrics.horizontalOverflow) {
    depthFailures.push({ path, ...metrics });
  }
}

await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
await page.getByRole("link", { name: "제품소개" }).first().hover();
await page.getByRole("link", { name: "RFID Reader / N₂" }).first().click();
await page.waitForLoadState("domcontentloaded");
const clickFlow = {
  pathname: new URL(page.url()).pathname,
  heading: (await page.locator("main h1").first().textContent())?.trim() ?? "",
};
await page.screenshot({ path: resolve(screenshotDir, "product-category-desktop.png"), fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(`${baseUrl}/company_intro/core-competencies/`, { waitUntil: "domcontentloaded" });
await page.screenshot({ path: resolve(screenshotDir, "content-page-mobile.png"), fullPage: true });
const mobile = {
  heading: (await page.locator("main h1").first().textContent())?.trim() ?? "",
  horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1),
};

const visualCases = [
  { path: "/company_intro/company_history/", viewport: { width: 1280, height: 800 }, file: "history-desktop.png" },
  { path: "/about/faq/", viewport: { width: 1280, height: 800 }, file: "faq-desktop.png" },
  { path: "/contact_usa/", viewport: { width: 390, height: 844 }, file: "contact-mobile.png" },
  { path: "/product-menu/rfid-reader-hm12/", viewport: { width: 390, height: 844 }, file: "product-detail-mobile.png" },
];
const visualMetrics = [];
for (const visualCase of visualCases) {
  await page.setViewportSize(visualCase.viewport);
  await page.goto(`${baseUrl}${visualCase.path}`, { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: resolve(screenshotDir, visualCase.file), fullPage: true });
  visualMetrics.push({
    path: visualCase.path,
    viewport: visualCase.viewport,
    horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1),
    brokenImages: await page.locator("img").evaluateAll((images) => images.filter((image) => !image.complete || image.naturalWidth === 0).length),
  });
}

console.log(JSON.stringify({
  results,
  routeCoverage: { checked: linkedPaths.length, failures: routeFailures },
  depthCoverage: { checked: depthPaths.length, failures: depthFailures },
  productDetailCoverage: { checked: productDetailCount, failures: productDetailFailures },
  clickFlow,
  mobile,
  visualMetrics,
  errors,
}, null, 2));
await browser.close();
