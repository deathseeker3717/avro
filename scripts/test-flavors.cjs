const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-data-dir=/tmp/test-avro-chrome']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

  // Wait 1.5s for 3D stage and textures to initialize
  await new Promise(r => setTimeout(r, 1500));

  const targetDir = '/Users/aditya/.gemini/antigravity-ide/brain/4b8dbafd-1821-4c23-96e2-b44f52b0d4bb/';

  // 1. Blood Orange
  await page.screenshot({ path: path.join(targetDir, 'avro_orange.png') });
  console.log('Saved avro_orange.png');

  // Click flavor helper
  async function clickFlavor(name, fileName) {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await (await btn.getProperty('textContent')).jsonValue();
      if (text.includes(name)) {
        await btn.click();
        console.log('Clicked', name);
        break;
      }
    }
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(targetDir, fileName) });
    console.log('Saved', fileName);
  }

  // 2. Mint Breeze
  await clickFlavor('Mint Breeze', 'avro_mint.png');

  // 3. Lemon Citrus / Yuzu Citrus
  await clickFlavor('Yuzu Citrus', 'avro_lemon.png');

  // 4. Wild Berry
  await clickFlavor('Wild Berry', 'avro_berry.png');

  // 5. Tropical Sol
  await clickFlavor('Tropical Sol', 'avro_tropical.png');

  await browser.close();
})();
