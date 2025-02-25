const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({page})=> {


    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();

    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled(); 

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked();

    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')
})