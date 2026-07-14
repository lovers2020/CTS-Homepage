import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright-core";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const output = resolve("qa", "reference");

await mkdir(output, { recursive: true });

const browser = await chromium.launch({ headless: true, executablePath: chromePath });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("https://www.suss.com/en/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(3000);

for (const label of [/accept all/i, /allow all/i, /alle akzeptieren/i]) {
  const button = page.getByRole("button", { name: label }).first();
  if (await button.isVisible().catch(() => false)) {
    await button.click().catch(() => undefined);
    break;
  }
}

await page.screenshot({ path: resolve(output, "suss-desktop-top.png") });

const portfolio = page.getByText("Our portfolio", { exact: true }).first();
if (await portfolio.isVisible().catch(() => false)) {
  await portfolio.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: resolve(output, "suss-desktop-portfolio.png") });
}

const desktop = await page.evaluate(() => {
  const body = getComputedStyle(document.body);
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  const header = document.querySelector("header");
  const styleOf = (element) => {
    if (!element) return null;
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeight,
      color: style.color,
      background: style.backgroundColor,
      rect: [Math.round(rect.x), Math.round(rect.y), Math.round(rect.width), Math.round(rect.height)],
    };
  };
  return {
    body: { fontFamily: body.fontFamily, color: body.color, background: body.backgroundColor },
    h1: styleOf(h1),
    h2: styleOf(h2),
    header: styleOf(header),
    pageHeight: document.documentElement.scrollHeight,
  };
});

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("https://www.suss.com/en/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2500);
await page.screenshot({ path: resolve(output, "suss-mobile-top.png") });

const mobile = await page.evaluate(() => ({
  viewport: [window.innerWidth, window.innerHeight],
  pageHeight: document.documentElement.scrollHeight,
  h1: (() => {
    const element = document.querySelector("h1");
    if (!element) return null;
    const style = getComputedStyle(element);
    return { fontSize: style.fontSize, lineHeight: style.lineHeight };
  })(),
}));

console.log(JSON.stringify({ desktop, mobile }, null, 2));
await browser.close();
