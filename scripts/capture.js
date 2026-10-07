import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = '/Users/aditya/.gemini/antigravity-ide/brain/4b8dbafd-1821-4c23-96e2-b44f52b0d4bb/scratch/screenshots';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  try {
    await page.goto('https://www.jeton.com/?enter', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    // Dismiss modal if present
    try {
      const continueBtn = await page.$('button');
      // Look for button with text Continue or close
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        for (const b of buttons) {
          if (b.innerText.includes('Continue') || b.innerText.includes('Accept') || b.innerText.includes('Close') || b.className.includes('close')) {
            b.click();
          }
        }
        // Also remove any fixed overlays if lingering
        const overlays = document.querySelectorAll('div[class*="modal"], div[class*="overlay"], div[class*="popup"], div[class*="backdrop"]');
        overlays.forEach(el => el.remove());
      });
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.log('No modal to dismiss:', e.message);
    }

    // Capture sections
    console.log('Capturing unblocked Jeton sections...');
    await page.screenshot({ path: path.join(outDir, 'jeton_01_hero.png') });

    await page.evaluate(() => window.scrollTo(0, 950));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_02_section.png') });

    await page.evaluate(() => window.scrollTo(0, 1900));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_03_stepper.png') });

    await page.evaluate(() => window.scrollTo(0, 2850));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_04_card.png') });

    await page.evaluate(() => window.scrollTo(0, 3800));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_05_calculator.png') });

    await page.evaluate(() => window.scrollTo(0, 4800));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_06_reviews.png') });

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, 'jeton_07_footer.png') });

    console.log('Finished capturing Jeton!');
  } catch (err) {
    console.error('Error:', err);
  }

  await browser.close();
}

capture();
