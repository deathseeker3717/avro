const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1774, height: 887 });
  await page.goto('http://localhost:5173/assets/3d_images/orangetopbottom.png');
  await page.screenshot({ path: '/Users/aditya/.gemini/antigravity-ide/brain/4b8dbafd-1821-4c23-96e2-b44f52b0d4bb/raw_orangetopbottom.png' });
  await browser.close();
  console.log('Saved raw_orangetopbottom.png');
})();
