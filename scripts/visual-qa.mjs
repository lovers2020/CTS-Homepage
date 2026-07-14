import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright-core";

const targetUrl = process.argv[2] ?? "http://127.0.0.1:5173/";
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const output = resolve("qa");

await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath,
});

const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (error) => errors.push(error.message));

await page.goto(targetUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);
await page.screenshot({ path: resolve(output, "desktop-top.png") });

for (const id of ["products", "videos", "news"]) {
  const section = page.locator(`#${id}`);
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await page.screenshot({ path: resolve(output, `desktop-${id}.png`) });
}

await page.locator("footer").scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: resolve(output, "desktop-full.png"), fullPage: true });

const desktopMetrics = await page.evaluate(() => ({
  viewport: [window.innerWidth, window.innerHeight],
  pageHeight: document.documentElement.scrollHeight,
  sections: Array.from(document.querySelectorAll("main > section")).map((section) => ({
    id: section.id,
    height: Math.round(section.getBoundingClientRect().height),
  })),
  duplicateIds: Array.from(document.querySelectorAll("[id]"))
    .map((element) => element.id)
    .filter((id, index, all) => all.indexOf(id) !== index),
  brokenImages: Array.from(document.images)
    .filter((image) => image.complete && image.naturalWidth === 0)
    .map((image) => image.currentSrc || image.src),
  externalAnchors: Array.from(document.links)
    .map((link) => link.href)
    .filter((href) => href.startsWith("http") && new URL(href).origin !== window.location.origin),
}));

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(targetUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(700);
await page.screenshot({ path: resolve(output, "mobile-top.png") });
await page.locator("#products").scrollIntoViewIfNeeded();
await page.waitForTimeout(450);
await page.screenshot({ path: resolve(output, "mobile-products.png") });
await page.locator("#news").scrollIntoViewIfNeeded();
await page.waitForTimeout(450);
await page.locator("footer").scrollIntoViewIfNeeded();
await page.waitForTimeout(450);
await page.screenshot({ path: resolve(output, "mobile-full.png"), fullPage: true });
await page.locator("#top").scrollIntoViewIfNeeded();
await page.locator(".menu-toggle").click();
await page.waitForTimeout(350);
await page.screenshot({ path: resolve(output, "mobile-menu.png") });

const openMobileMetrics = await page.evaluate(() => ({
  viewport: [window.innerWidth, window.innerHeight],
  pageHeight: document.documentElement.scrollHeight,
  menuOpen: document.querySelector(".mobile-nav")?.classList.contains("mobile-nav--open"),
  activeElement: document.activeElement?.getAttribute("aria-label") ?? document.activeElement?.tagName,
  menuStyles: (() => {
    const menu = document.querySelector(".mobile-nav");
    if (!menu) return null;
    const style = getComputedStyle(menu);
    const rect = menu.getBoundingClientRect();
    return {
      background: style.backgroundColor,
      color: style.color,
      opacity: style.opacity,
      zIndex: style.zIndex,
      rect: [rect.x, rect.y, rect.width, rect.height],
    };
  })(),
}));

await page.keyboard.press("Escape");
await page.waitForTimeout(100);
const closedMenuMetrics = await page.evaluate(() => ({
  menuRemoved: !document.querySelector(".mobile-nav"),
  focusReturned: document.activeElement?.classList.contains("menu-toggle") ?? false,
  bodyUnlocked: !document.body.classList.contains("menu-is-open"),
}));

const mobileMetrics = { ...openMobileMetrics, closedMenu: closedMenuMetrics };

console.log(JSON.stringify({ desktopMetrics, mobileMetrics, errors }, null, 2));
await browser.close();
