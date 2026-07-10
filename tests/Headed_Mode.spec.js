import {test, firefox} from '@playwright/test'

test ("Headless Mode", async()=> {
const browser = await firefox.launch({headless:false});
const page = await browser.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const actualPageTitle= await page.title();
console.log(await actualPageTitle)
await page.close();








})