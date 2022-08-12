/**
 * @name Download file / upload file
 *
 * @desc Find an image by class selector, downloads the image, saves it to disk and read it again. Use this together with a .fileUpload() method.
 *
 */

 const puppeteer = require('puppeteer')
 const fs = require('fs')
 const path = require('path')
 const { promisify } = require('util')
 
 const readFileAsync = promisify(fs.readFile)
 const writeFileAsync = promisify(fs.writeFile);
 (async () => {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()
   var url = "https://drive.google.com/uc?export=download&id=1qilo1so6jZ93efNNt7yE8tAxAQqBkegZ";
   await page.setViewport({ width: 1200, height: 800 })
 
   await page.goto(url)
   const viewSource = await page.goto(url)
   const buffer = await viewSource.buffer()
   await writeFileAsync(path.join(__dirname, 'checkly.stl'), buffer)
   console.log('The file was saved!')
   browser.close()
 })()