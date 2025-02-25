const { test, expect } = require('@playwright/test');


test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

        //click on login button - property of the element as a locator
        //await page.locator('id=login2').click()
        await page.click('id=login2')

        //provide username - CSS
        await page.locator('#loginusername').fill('petyaol')


        //provide password
        await page.locator("input[id='loginpassword']").fill("test@123")

        //Click on login button
        await page.click("//button[normalize-space()='Log in']")

        //verify logout link presence
       const logoutlink =  await page.locator("//a[@id='logout2']")

        await expect(logoutlink).toBeVisible();

        await page.close();


})