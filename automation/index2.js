const puppeteer = require("puppeteer")

const fs =require('fs')
let page;
let browser;

puppeteer.launch({
    headless: false,
    defaultViewport: null
}).then(br => {
    browser = br
    return br.newPage()
}).then(p => {
    page = p;
    return page.goto("https://www.google.com")
}).then(res => {
    // typing on the input 
    return page.type("input:nth-child(3)", "amazon", {
        delay: "500"
    })
}).then(res => {
    // click on the search button
    return page.click("input:nth-child(1)")
}).then(waitingForAmazontoAppear => {
    return page.waitForSelector("a[href='https://www.amazon.in/']")
}).then(res => {
    // wait then click the amazon link
    return page.click("a[href='https://www.amazon.in/']")
}).then(waitForInputToAppear => {
    return page.waitForSelector(".nav-search-field input")
}).then(typeInTheSearchBar => {
    return page.type(".nav-search-field input", "macbook pro", {
        delay: 300
    })
}).then(typingHogai => {

    return page.type(".nav-search-field input", String.fromCharCode(13));
}).then(res => {
    return page.waitForTimeout(1000)
   
}).then(res => {
    return page.evaluate(() => {
         let arr =[]
        // to get the prices of laptops 
        let dataArr = document.querySelectorAll('.a-size-medium.a-color-base.a-text-normal')
        dataArr.forEach((ele) => {
            console.log(ele.innerText);
            let elements = ele.innerText
            arr.push(elements);
    
        })
         return arr;
        // somehow write it in text file
    })
}) .then((res) => {
        console.log(res);
    fs.writeFileSync('data.txt', JSON.stringify(res))
}) .catch(err => {
        console.log(err);
    })
