import { test } from "@playwright/test";

test("Get URL", async ({ page }) => {

    await page.goto("https:www.facebook.com");

    console.log("Current URL:", page.url());

})