const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

  const testShift = await page.evaluate(async () => {
    // Normalized BBoxes for all 5 flavors
    const BBOXES = {
      orange: {
        front: { x: 84, y: 8, w: 1080, h: 1234 },
        back: { x: 72, y: 22, w: 1110, h: 1215 },
        spine: { x: 395, y: 10, w: 168, h: 864 },
        right: { x: 1208, y: 10, w: 168, h: 864 },
        top: { x: 77, y: 108, w: 1615, h: 326 },
        bottom: { x: 77, y: 505, w: 1618, h: 274 }
      },
      mint: {
        front: { x: 84, y: 8, w: 1080, h: 1234 },
        back: { x: 72, y: 22, w: 1110, h: 1215 },
        spine: { x: 395, y: 10, w: 168, h: 864 },
        right: { x: 1208, y: 10, w: 168, h: 864 },
        top: { x: 77, y: 107, w: 1615, h: 326 },
        bottom: { x: 77, y: 505, w: 1618, h: 274 }
      },
      lemon: {
        front: { x: 84, y: 8, w: 1080, h: 1234 },
        back: { x: 72, y: 22, w: 1110, h: 1215 },
        spine: { x: 395, y: 10, w: 168, h: 864 },
        right: { x: 1208, y: 10, w: 168, h: 864 },
        top: { x: 77, y: 106, w: 1615, h: 326 },
        bottom: { x: 77, y: 503, w: 1618, h: 274 }
      },
      berry: {
        front: { x: 84, y: 8, w: 1080, h: 1234 },
        back: { x: 72, y: 22, w: 1110, h: 1215 },
        spine: { x: 395, y: 8, w: 168, h: 868 },
        right: { x: 1212, y: 8, w: 168, h: 868 },
        top: { x: 75, y: 104, w: 1618, h: 326 },
        bottom: { x: 77, y: 500, w: 1618, h: 274 }
      },
      tropical: {
        front: { x: 84, y: 8, w: 1080, h: 1234 },
        back: { x: 72, y: 20, w: 1110, h: 1218 },
        spine: { x: 393, y: 7, w: 168, h: 870 },
        right: { x: 1212, y: 7, w: 168, h: 870 },
        top: { x: 67, y: 167, w: 1639, h: 248 },
        bottom: { x: 67, y: 465, w: 1639, h: 257 }
      }
    };
    return BBOXES;
  });

  console.log('Normalized BBoxes configured successfully');
  await browser.close();
})();
