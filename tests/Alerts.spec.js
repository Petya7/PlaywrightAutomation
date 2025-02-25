const { test, expect } = require('@playwright/test');

test.skip('Alert with OK', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();


    })

    await page.click("(//button[normalize-space()='Simple Alert'])[1]");
    await page.waitForTimeout(5000);

});


test.skip('Confirmation dialog-Alert with OK and cancel', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss(); //close by using cancel button


    })

    await page.click("//button[@id='confirmBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

});




test('Prompt dialog', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); //close by using OK button
        


    })

    await page.click("//button[@id='promptBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);

});