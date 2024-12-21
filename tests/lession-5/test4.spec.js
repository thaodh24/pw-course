import { test } from '@playwright/test';

const xpathPersonalNoteAccess = '//a[contains(text(),"Bài học 4: Personal notes")]';
const xpathPersonalNoteHeader = '//h1[contains(text(),"To-Do List")]';


test("Create & search new notes", async ({ page }) => {
    await test.step('Naviagate to Source page', async () => {
        await page.goto("https://vnexpress.net/khoa-hoc");
    })

    await test.step('Naviagate to Source page', async () => {
        
    })

    await test.step('Naviagate to Personal Note page', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator(xpathPersonalNoteAccess).click();
        await page.locator(xpathPersonalNoteHeader).isVisible();
    })

    await test.step('Create new 10 notes', async () => {
        for (let i = 1; i <= 10; i++){

        }
    })
})