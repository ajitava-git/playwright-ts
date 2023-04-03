import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://qxf2.com/selenium-tutorial-main');
  });

test.describe('Test Web Page', () => {
    test('navigate url', async ({page}) => {
        await expect (page).toHaveTitle('Qxf2 Services: Selenium training main');
    });

    test('fill text', async ({page}) => {
        await page.getByLabel('Name:').fill('Ajitava');
        await expect (page).toHaveTitle('Qxf2 Services: Selenium training main');
    });    

});