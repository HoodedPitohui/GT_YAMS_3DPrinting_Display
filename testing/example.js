
const express = require('express')
const PublicGoogleSheetsParser = require('public-google-sheets-parser')
const app = express()
const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log('http://localhost:5656')
})

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();