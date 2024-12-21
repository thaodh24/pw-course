import { test } from '@playwright/test';
const xpathTodoPageAccess = '//a[contains(text(),"Bài học 3: Todo page")]';
const xpathTodoPageHeader = '//h1[contains(text(),"To-Do List")]';
const xpathInputTaskTextBox = '//input[@placeholder="Enter a new task"]';
const xpathAddTaskButton = '//button[@id="add-task"]';

test("Create todo tasks", async ({ page }) => {
    await test.step('Naviagate to  Todo page', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator(xpathTodoPageAccess).click();
        await page.locator(xpathTodoPageHeader).isVisible();
    })

    await test.step('Create 100 tasks', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator(xpathInputTaskTextBox).fill(`Todo ${i}`);
            await page.locator(xpathAddTaskButton).click();
        }
    })

    await test.step('Delete odd tasks', async () => {
        for (let i = 1; i <= 100; i += 2) {
            let xpathDeleteOddTaskButton = `//button[@id="todo-${i}-delete"]`;
            page.on('dialog', dialog => dialog.accept());
            await page.locator(xpathDeleteOddTaskButton).click();
        }
    })
})