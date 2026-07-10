import {test, chromium} from '@playwright/test'


test("Launch Browser", async ()=> {
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://meet.google.com/landing");
const actualPageTitle = await page.title();
console.log(await actualPageTitle);
})