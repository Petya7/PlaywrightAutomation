const { test, expect } = require('@playwright/test');

test('Keyboard actions', async ({page}) => {

    await page.goto("https://gotranscript.com/text-compare")

    //await page.locator('name="text1"').fill("welcome to automation")

    await page.type("//textarea[@placeholder='Paste one version of the text here.']", 'welcome to automation');

    // ctrl + A

    await page.keyboard.press('Control+A');

    // ctrl + C

    await page.keyboard.press('Control+C');
    
    // Tab

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // ctrl + V

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

    
})