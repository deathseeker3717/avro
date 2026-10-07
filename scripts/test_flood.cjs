const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 600 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

  await page.evaluate(async () => {
    const img = new Image();
    await new Promise(r => { img.onload = r; img.src = '/assets/3d_images/orangetopbottom.png'; });

    const cv = document.createElement('canvas');
    cv.id = 'flood-test-cv';
    cv.width = 1000;
    cv.height = 300;
    cv.style.position = 'fixed';
    cv.style.top = '20px';
    cv.style.left = '20px';
    cv.style.zIndex = '999999';
    cv.style.border = '2px solid red';
    document.body.appendChild(cv);

    const ctx = cv.getContext('2d');
    const sx = 77, sy = 108, sw = 1615, sh = 329;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cv.width, cv.height);

    // Flood fill from edges for white pixels
    const w = cv.width;
    const h = cv.height;
    const imgData = ctx.getImageData(0, 0, w, h);
    const d = imgData.data;
    const visited = new Uint8Array(w * h);
    const queue = [];

    function isWhite(x, y) {
      const idx = (y * w + x) * 4;
      return d[idx] > 225 && d[idx + 1] > 225 && d[idx + 2] > 225;
    }

    // Seed from borders
    for (let x = 0; x < w; x++) {
      if (isWhite(x, 0)) { queue.push(x, 0); visited[0 * w + x] = 1; }
      if (isWhite(x, h - 1)) { queue.push(x, h - 1); visited[(h - 1) * w + x] = 1; }
    }
    for (let y = 0; y < h; y++) {
      if (isWhite(0, y) && !visited[y * w]) { queue.push(0, y); visited[y * w] = 1; }
      if (isWhite(w - 1, y) && !visited[y * w + w - 1]) { queue.push(w - 1, y); visited[y * w + w - 1] = 1; }
    }

    // BFS
    let head = 0;
    while (head < queue.length) {
      const qx = queue[head++];
      const qy = queue[head++];

      // 4 neighbors
      const neighbors = [
        [qx + 1, qy],
        [qx - 1, qy],
        [qx, qy + 1],
        [qx, qy - 1]
      ];

      for (let i = 0; i < 4; i++) {
        const nx = neighbors[i][0];
        const ny = neighbors[i][1];
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nIdx = ny * w + nx;
          if (!visited[nIdx] && isWhite(nx, ny)) {
            visited[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }

    // Replace all visited outside white pixels with cardboard tone #C84000
    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) {
        const idx = i * 4;
        d[idx] = 195;
        d[idx + 1] = 60;
        d[idx + 2] = 0;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  });

  const el = await page.$('#flood-test-cv');
  await el.screenshot({ path: '/Users/aditya/.gemini/antigravity-ide/brain/4b8dbafd-1821-4c23-96e2-b44f52b0d4bb/flood_fill_test.png' });
  await browser.close();
  console.log('Saved flood_fill_test.png');
})();
