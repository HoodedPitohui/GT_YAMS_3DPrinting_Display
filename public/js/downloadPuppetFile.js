const puppeteer = require('puppeteer');
const path = require('path');
const downloadPath = path.resolve('/public');
async function simplefileDownload() {
    const browser = await puppeteer.launch({
        headless: false
    });
    
    const page = await browser.newPage();
    await page.goto(
        'https://drive.google.com/uc?export=download&id=1qilo1so6jZ93efNNt7yE8tAxAQqBkegZ', 
        { waitUntil: 'networkidle2' }
    );
    
    await page._client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadPath 
    });
}
simplefileDownload();