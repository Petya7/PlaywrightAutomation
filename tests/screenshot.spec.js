const { test, expect } = require('@playwright/test');

test('page screenshot', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
})

test('Full page screenshot', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png', fullPage: true})

    
})

test.only('Element screenshot', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//*[name()='rect' and contains(@x,'3')]").screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})

    
})