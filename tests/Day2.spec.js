import {test} from "@playwright/test"

test("Amazon test", async({page})=> {
await page.goto("https://www.amazon.in/");
await page.waitforTimeout(3000);
});

test("Amazon test", async({page})=> {
await page.goto("https://www.facebook.com/login/");
await page.waitforTimeout(3000);

});
test("Amazon test",async ()=>{
    await page.goto("")
})