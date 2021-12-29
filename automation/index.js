const puppeteer = require('puppeteer');
let browser = puppeteer.launch({
    headless: false
})


browser.then(resBrowser => {
    let pageOpenAndWait = resBrowser.newPage();
    pageOpenAndWait.then(page => {
        let gotoResult = page.goto("https://www.google.com")
        gotoResult.then(res => {
            let waitAndType = page.type("input:nth-child(3)", "amazon")
            waitAndType.then(typeRes => {
                console.log("done typing");
            })
        })
    })
})