const { test, expect } = require('@playwright/test');

test('Handle multi select dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select multiple options from multi select dropdown
    //await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    //Assertions
    //1) Check number of options in the dropdown
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(5);

    //2) Check number of options in dropdown using JS array
    // const options = await page.$$('#colors option')
    // console.log('Number of options:', options.length)
    // await expect(options.length).toBe(5);

    //3) Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Black')).toBeTruthy();

    await page.waitForTimeout(5000);

})