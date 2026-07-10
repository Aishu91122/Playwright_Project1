import {test, chromium} from '@playwright/test'
test("OrangeHRM", async ()=> {
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://www.google.com")
console.log(await page.title());









})