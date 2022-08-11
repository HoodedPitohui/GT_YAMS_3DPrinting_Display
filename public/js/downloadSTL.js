const puppeteer = require('puppeteer')
const client = await page.target().createCDPSession()
await client.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: './public',
})