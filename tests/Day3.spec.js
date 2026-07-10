import {test, chromium} from '@playwright/test'

test("Launch Chrome Browser", async ()=>{
 const browser  = await chromium.launch();
 const page = await browser.newPage();
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 
})