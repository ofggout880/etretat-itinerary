const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set to iPhone screen size
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  });

  await page.goto('http://localhost:8081', { waitUntil: 'networkidle0' });
  
  // Wait a bit for map
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: '/Users/matthieugout/.gemini/antigravity/brain/46e6f6ab-a912-491b-b0a5-be7bac4d384b/mobile_screenshot.png' });
  
  await browser.close();
})();
