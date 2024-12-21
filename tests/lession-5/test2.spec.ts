import { test } from '@playwright/test';
const xpathProductAccess = '//a[contains(text(),"Bài học 2: Product page")]';
const xpathProductPageHeader = '//h1[contains(text(),"Simple E-commerce")]';
const addSP1Button = '//button[@data-product-id = "1"]';
const addSP2Button = '//button[@data-product-id = "2"]';
const addSP3Button = '//button[@data-product-id = "3"]';

test("Add product on the basket", async ({ page }) => {
    await test.step('Naviagate to Product page', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator(xpathProductAccess).click();
        await page.locator(xpathProductPageHeader).isVisible();
    })

    await test.step('Select and add 2 sp1 on the basket', async () => {
        await page.locator(addSP1Button).dblclick();
        await page.locator(`//td[contains(text(),"Product 1")]`).isVisible();
    })

    await test.step('Select and add 3 sp2 on the basket', async () => {
        await page.locator(addSP2Button).click({ clickCount: 3 });
        await page.locator(`//td[contains(text(),"Product 2")]`).isVisible();
    })

    await test.step('Select and add 1 sp3 on the basket', async () => {
        await page.locator(`${addSP3Button}`).click();
        await page.locator(`//td[contains(text(),"Product 3")]`).isVisible();
    })

})