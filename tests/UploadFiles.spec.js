const { test, expect } = require('@playwright/test');

test('Single File', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')


    await page.waitForSelector("//input[@id='singleFileInput']")
    await page.locator("//input[@id='singleFileInput']").setInputFiles('tests/uploadFiles/test.jpg')

    await page.waitForTimeout(5000);

})

test.only('Multiple Files', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/test.jpg', 'tests/uploadFiles/test2.jpeg.jpeg'])

    await page.waitForTimeout(5000);
    expect(await page.locator("//li[normalize-space()='test.jpg']")).toHaveText('test.jpg')
    expect(await page.locator("//li[normalize-space()='test2.jpeg.jpeg']")).toHaveText('test2.jpeg.jpeg')
    await page.waitForTimeout(5000);

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(5000);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    await page.waitForTimeout(5000);

})