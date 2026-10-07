const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

  const flapData = await page.evaluate(async () => {
    const flavors = ['orange', 'mint', 'lemon', 'berry', 'tropical'];
    const res = {};

    const load = (src) => new Promise(r => {
      const img = new Image();
      img.onload = () => r(img);
      img.src = src;
    });

    for (const f of flavors) {
      const img = await load('/assets/3d_images/' + f + 'topbottom.png');
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Top flap scan (top half y: 50..450)
      const data = ctx.getImageData(0, 0, c.width, c.height).data;
      
      function scanRegion(sy, ey) {
        let minX = c.width, maxX = 0, minY = ey, maxY = sy;
        for (let y = sy; y < ey; y++) {
          for (let x = 0; x < c.width; x++) {
            const idx = (y * c.width + x) * 4;
            const r = data[idx], g = data[idx+1], b = data[idx+2];
            // Not pure white background
            if (!(r > 242 && g > 242 && b > 242)) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
      }

      // Top flap
      const topFlap = scanRegion(50, 450);
      // Bottom flap
      const botFlap = scanRegion(450, 850);

      res[f] = { topFlap, botFlap };
    }
    return res;
  });

  console.log('Flap exact coordinates:', JSON.stringify(flapData, null, 2));
  await browser.close();
})();
