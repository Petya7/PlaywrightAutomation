const { test, expect } = require('@playwright/test');

test('handle radio button', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    await page.locator("//input[@id='female']").check();
    await expect(await page.locator("//input[@id='female']")).toBeChecked();
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy();
 
    await page.waitForTimeout(5000);
 
 })