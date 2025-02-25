const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({page}) => {

    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = await page.locator('#box6')

    const italy = await page.locator('#box106')

    //Approach 1

    /*await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
    */

    //Approach 2

    await rome.dragTo(italy)

    await page.waitForTimeout(5000)
})