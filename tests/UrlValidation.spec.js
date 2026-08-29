import{test}  from '@playwright/test'

test("Url Validation", async({page}) => {

    await page.goto("https://www.facebook.com/");
    const url =  page.url();
    console.log(url);
    console.log( "This code is to get the Url of the page");
})