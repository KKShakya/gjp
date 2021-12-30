console.log("start");
(async () => {
    try {
        const fs = require("fs")
        const puppeteer = require("puppeteer");
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        let page = await browser.newPage();
        await page.goto("https://www.google.com")
        await page.type("input:nth-child(3)", "amazon", {
            delay: "500"
        })
        await page.click("input:nth-child(1)")
        await page.waitForSelector("a[href='https://www.amazon.in/']")
        await page.click("a[href='https://www.amazon.in/']")
        await page.waitForSelector(".nav-search-field input")
        await page.type(".nav-search-field input", "macbook pro", {
            delay: 300
        })
        await page.type(".nav-search-field input", String.fromCharCode(13));
        await page.waitForTimeout(1000)
        let data = await page.evaluate(() => {
            let arr = []
            // to get the prices of laptops 
            let dataArr = document.querySelectorAll('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20')
            dataArr.forEach(laptop => {
                let name = laptop.querySelector("h2")
                name = name.innerText
                let price = laptop.querySelectorAll("span.a-price .a-offscreen")
                price = price[0].innerText
                arr.push({
                    name,
                    price
                })
            })
            return arr;
        })
        fs.writeFileSync('data.json', JSON.stringify(data))

        // write the data object in a exel file
        const XLSX = require('xlsx');
        const workbook = XLSX.readFile('data.json');
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'data.xlsx');
    } catch (error) {
        console.log(error);
    }
})()

console.log("end");