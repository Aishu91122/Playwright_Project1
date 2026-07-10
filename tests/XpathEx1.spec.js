import {test,chromium} from '@playwright/test'

test("Relative xpath example ", async ()=>{

   const browser =  await chromium.launch({headless:false, args:['--start-maximized'] })

   const context =  await browser.newContext({viewport:null})

   const page = await context.newPage()

   await page.goto("https://the-internet.herokuapp.com/login")

   await page.waitForTimeout(3000)

   await page.locator("//input[@name='username']").fill("tomsmith")

   await page.waitForTimeout(3000)
   
})