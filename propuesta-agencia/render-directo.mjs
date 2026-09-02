// Usa el playwright del worktree (tiene navegadores descargados)
const { chromium } = await import('file:///E:/Laboral/.worktrees/servicios/node_modules/playwright/index.mjs');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file:///E:/Laboral/propuesta-agencia/propuesta-servicios-3d.html', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: 'propuesta-servicios-3d.pdf',
  width: '210mm', height: '297mm',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: true,
});
await browser.close();
console.log('PDF directo OK');
