// screenshot.js
const puppeteer = require("puppeteer")

(async function() {

    const browser = await puppeteer.launch({ headless: true })

    const page = await browser.newPage()

    await page.goto('https://medium.com')

    const screenShot = await page.screenshot({
        path: "./",
        type: "png",
        fullPage: true
    })
}()
)