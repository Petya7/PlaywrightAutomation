import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { CartPage } from '../Pages/CartPage';
import { HomePage } from '../Pages/HomePage';


test("test", async ({page}) => {

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('petya1', 'test@123')
    await page.waitForTimeout(5000);

    //Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000);
    await home.gotoCart();
    

    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);

})