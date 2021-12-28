// console.log(require("module").wrapper);
// console.log(__dirname, "dirname");
// console.log(__filename, "filename");


// require("./circle.js");
// console.log("Inside index.js");
// let obj = require("./circle.js") // nhi chala
// console.log(obj);

// let area = require("./circle.js");
// console.log(area());

// import { abc } from "./circle.js";

// abc();






(async () => {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.screenshot({ path: 'example.png' });
    await page.type('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div.SDkEP > div.a4bIc > input',
        'puppeteer');

    await page.click("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b")
    // await browser.close();
})();



