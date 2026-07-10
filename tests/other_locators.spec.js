import {test,chromium} from '@playwright/test'

test("other locators example ", async ()=>{

   const browser =  await chromium.launch({headless:false, args:['--start-maximized'] })

   const context =  await browser.newContext({viewport:null})

   const page = await context.newPage()

   await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

   await page.waitForTimeout(3000)

   await page.getByPlaceholder("Enter your full name").fill("javascript")

   await page.waitForTimeout(3000)

   const t1 = await page.getByText("Choose a Password").textContent()

   console.log(t1)

   await page.waitForTimeout(3000)

   const t2 = await page.getByTitle("Rediff Login").textContent()

   console.log(t2)

   await page.waitForTimeout(3000)

   await page.getByRole('radio',{name:'Female'}).click()

    await page.waitForTimeout(3000)

    const t3 = await page.getByLabel("I live in").textContent()

    console.log(t3)

    await page.waitForTimeout(3000)

})