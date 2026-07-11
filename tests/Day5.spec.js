import {test, chromium} from '@playwright/test'

test ("Launch Browser", async ({page})=> {
page.goto("https://www.makemytrip.com/");
console.log(await page.title())
console.log("This line is to validate Title");


})