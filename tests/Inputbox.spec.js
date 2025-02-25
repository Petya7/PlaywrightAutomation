const { test, expect } = require('@playwright/test');

test('handle inputbox', async({page})=> {

   await page.goto('https://testautomationpractice.blogspot.com/');

   //inputbox firstname

   await expect(await page.locator("//input[@id='name']")).toBeVisible();
   await expect(await page.locator("//input[@id='name']")).toBeEmpty();
   await expect(await page.locator("//input[@id='name']")).toBeEditable();
   await expect(await page.locator("//input[@id='name']")).toBeEnabled();


   page.locator("//input[@id='name']").fill('John');

   await page.waitForTimeout(5000);

})