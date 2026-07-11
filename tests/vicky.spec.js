import {test,firefox} from "@playwright/test"

test("my test",async ()=>{
    const browser= await firefox.launch();
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

})