import {test} from '@playwright/test'
import { log } from 'node:console';

test("TitleValidation", async({page})=>{
    await page.goto("https://www.facebook.com/");
    const title = page.getByTitle("Facebook");
    console.log(title);
    console.log( "This code is to get the title of the page");
})