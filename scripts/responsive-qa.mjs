import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright-core";

const targetUrl = process.argv[2] ?? "http://127.0.0.1:5174/product-menu/";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const output = resolve("qa", "responsive");
const viewports = [
  { width: 320, height: 568 },
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1366, height: 768 },
  { width: 1920, height: 1080 },
];

await mkdir(output, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath: chromePath });
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(targetUrl, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: resolve(output, `${viewport.width}x${viewport.height}-top.png`) });

  await page.locator("#products").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: resolve(output, `${viewport.width}x${viewport.height}-products.png`) });

  const metrics = await page.evaluate(() => {
    const allowedOverflow = (element) =>
      Boolean(element.closest(".solution-grid, .value-grid, .mobile-nav"));
    const overflowElements = Array.from(document.querySelectorAll("body *"))
      .filter((element) => {
        if (allowedOverflow(element)) return false;
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.right > window.innerWidth + 1 || rect.left < -1);
      })
      .slice(0, 12)
      .map((element) => ({
        tag: element.tagName,
        className: element.className?.toString().slice(0, 100) ?? "",
        rect: (() => {
          const rect = element.getBoundingClientRect();
          return [Math.round(rect.left), Math.round(rect.right), Math.round(rect.width)];
        })(),
      }));

    const h1 = document.querySelector("h1");
    const header = document.querySelector(".site-header");
    const solutionGrid = document.querySelector(".solution-grid");
    const valueGrid = document.querySelector(".value-grid");
    return {
      viewport: [window.innerWidth, window.innerHeight],
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      overflowElements,
      h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
      headerHeight: header ? Math.round(header.getBoundingClientRect().height) : null,
      solutionLayout: solutionGrid ? getComputedStyle(solutionGrid).display : null,
      solutionScrollable: solutionGrid ? solutionGrid.scrollWidth > solutionGrid.clientWidth : false,
      valueScrollable: valueGrid ? valueGrid.scrollWidth > valueGrid.clientWidth : false,
    };
  });

  results.push({ ...metrics, errors });
  await page.close();
}

console.log(JSON.stringify(results, null, 2));
await browser.close();
