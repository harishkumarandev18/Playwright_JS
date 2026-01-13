const {test, chromium, expect} = require('@playwright/test')

test('Launch application', async () => {
    
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to URL
    await page.goto('https://www.saucedemo.com/');

    // Validate the Title
    await expect(page).toHaveTitle('Swag Labs');

    // Login using proper credentials
    await page.locator("xpath=//input[@id='user-name']").fill("standard_user");
    await page.locator("css=#password").fill("secret_sauce");
    await page.waitForTimeout(2000);
    
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);

})



