const { test, expect } = require('@playwright/test');

test('Date Picker', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.fill('#datepicker', '01/17/2025')

    //date picker
    const year = "2025"
    const month = "February"
    const date = "20"

    await page.click('#datepicker') //opens calendar

    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        
        if(currentYear ==year && currentMonth ==month)
        {
            break;
        }

        await page.locator('[title="Next"]').click()
    }

    const dates = await page.$$("//a[@class='ui-state-default']")
    
    //date selection using loop
    /*for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click()
            break;
        }
    }
    */
   
    //direct date selection
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)


    await page.waitForTimeout(3000);
})