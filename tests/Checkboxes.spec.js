const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //single checkbox

    await page.locator("//input[@id='monday']").check();

    expect(await page.locator("//input[@id='monday']")).toBeChecked();
    expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy();

    //Multiple checkboxes

    const checkboxLocators = [
                        "//input[@id='monday']",
                        "//input[@id='sunday']",
                        "//input[@id='saturday']"    
                    ];


    for(const locator of checkboxLocators) //select multiple checkboxes
        {
            await page.locator(locator).check();

        } 
        
        await page.waitForTimeout(5000);
        
    for(const locator of checkboxLocators) //unselect multiple checkboxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        {    
        await page.locator(locator).uncheck();
        }    
    }

        

    await page.waitForTimeout(5000);
})