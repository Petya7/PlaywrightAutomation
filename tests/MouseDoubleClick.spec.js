const { test, expect } = require('@playwright/test');

test('Mouse double click', async ({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

    //double click

    await btnCopy.dblclick();

    const field2 = await page.locator('#field2')

    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
})