import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const baseUrl = "http://127.0.0.1:4321";
const screenshotDir = "qa-screenshots";

const routes = [
  "/",
  "/work",
  "/twinsight-x500",
  "/human-character-pipeline",
  "/ara-framework",
  "/about",
  "/contact",
  "/focus/technical-visualization",
  "/focus/unity-webgl",
  "/focus/unity-technical-artist",
  "/focus/3d-pipeline"
];

const screenshotRoutes = new Set([
  "/",
  "/work",
  "/twinsight-x500",
  "/human-character-pipeline",
  "/contact"
]);

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 }
];

mkdirSync(screenshotDir, { recursive: true });

async function launchBrowser() {
  const attempts = [
    () => chromium.launch({ channel: "chrome", headless: true }),
    () => chromium.launch({ channel: "msedge", headless: true }),
    () => chromium.launch({ headless: true })
  ];

  let lastError;
  for (const attempt of attempts) {
    try {
      return await attempt();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const browser = await launchBrowser();
const report = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.name === "mobile" ? 2 : 1,
    isMobile: viewport.name === "mobile"
  });

  for (const route of routes) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (error) => {
      consoleErrors.push(error.message);
    });

    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const steps = Math.max(1, Math.ceil(maxScroll / Math.max(1, window.innerHeight * 0.8)));
      for (let index = 0; index <= steps; index += 1) {
        window.scrollTo(0, Math.min(maxScroll, index * window.innerHeight * 0.8));
        await delay(80);
      }
      window.scrollTo(0, 0);
      await delay(120);
    });

    const audit = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a"));
      const images = Array.from(document.querySelectorAll("img"));
      const uncontrolledLinks = links
        .map((link) => ({
          text: link.textContent?.trim() ?? "",
          href: link.getAttribute("href"),
          disabled: link.getAttribute("aria-disabled")
        }))
        .filter((link) => !link.href && link.disabled !== "true");

      const brokenImages = images
        .map((img) => ({
          src: img.getAttribute("src"),
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight
        }))
        .filter((img) => img.naturalWidth === 0 || img.naturalHeight === 0);

      return {
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim() ?? "",
        bodyWidth: document.body.scrollWidth,
        viewportWidth: window.innerWidth,
        uncontrolledLinks,
        brokenImages,
        placeholderLinks: Array.from(document.querySelectorAll("[data-placeholder]")).map((element) =>
          element.getAttribute("data-placeholder")
        )
      };
    });

    if (screenshotRoutes.has(route)) {
      const fileName = `${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${viewport.name}.png`;
      await page.screenshot({ path: `${screenshotDir}/${fileName}`, fullPage: true });
    }

    report.push({
      route,
      viewport: viewport.name,
      title: audit.title,
      h1: audit.h1,
      horizontalOverflow: audit.bodyWidth > audit.viewportWidth + 1,
      uncontrolledLinks: audit.uncontrolledLinks,
      brokenImages: audit.brokenImages,
      consoleErrors,
      placeholderLinks: audit.placeholderLinks
    });

    await page.close();
  }

  await context.close();
}

await browser.close();

writeFileSync(`${screenshotDir}/qa-report.json`, JSON.stringify(report, null, 2));

const failures = report.filter(
  (item) =>
    !item.h1 ||
    item.horizontalOverflow ||
    item.uncontrolledLinks.length > 0 ||
    item.brokenImages.length > 0 ||
    item.consoleErrors.length > 0
);

console.log(JSON.stringify({ routes: report.length, failures }, null, 2));

if (failures.length > 0) {
  process.exitCode = 1;
}
