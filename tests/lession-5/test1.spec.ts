import { test } from '@playwright/test';

const xpathRegisterAccess = '//a[contains(text(),"Bài học 1: Register Page")]';
const xpathRegisterHeader = '//h1[contains(text(),"User Registration")]';
const xpathInput = {
    username: '//input[@id="username"]',
    email: '//input[@id="email"]',
    gender: {
        female: '//input[@id="female"]',
        male: '//input[@id="male"]',
    },
    hobbies: {
        reading: '//input[@id="reading"]',
    },
    interest: '//select[@id="interests"]',
    country: '//select[@id="country"]',
    dateOfBirth: '//input[@type="date"]',
    profilePicture: '//input[@type="file"]',
    biography: '//textarea[@id="bio"]',
    rateUs: '//input[@id="rating"]',
    favColor: '//input[@id="favcolor"]',
    newSettle: '//div[contains(text(),"Hover over me")]',
    enableFeature: '//span[@class="slider round"]',
};
const xpathRegisterButton = '//button[contains(text(),"Register")]';

test("register scenario", async ({ page }) => {
    await test.step('navigate to Register page', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator(`${xpathRegisterAccess}`).click();
        await page.locator(`${xpathRegisterHeader}`).isVisible();
    })
    await test.step('Input data on all fields', async () => {
        await page.locator(xpathInput.username).fill('User01');
        await page.locator(xpathInput.email).fill('User01@gmail.com');
        await page.locator(xpathInput.gender.female).setChecked(true);
        await page.locator(xpathInput.hobbies.reading).setChecked(true);
        await page.locator(xpathInput.interest).selectOption({ value: "art" });
        await page.locator(xpathInput.country).selectOption({ value: "canada" });
        await page.locator(xpathInput.dateOfBirth).pressSequentially('24121997');
        await page.locator(xpathInput.profilePicture).setInputFiles('tests/lession-5/Ảnh màn hình 2024-12-14 lúc 21.03.34.png');
        await page.locator(xpathInput.biography).fill('biography Description');
        await page.locator(xpathInput.rateUs).hover();
        await page.mouse.up();
        await page.locator(xpathInput.favColor).dblclick();
        await page.locator(`//span[@id="colorDisplay"]`).hover();
        await page.mouse.up();
        await page.locator(xpathInput.newSettle).hover();
        await page.locator(`//input[@id="newsletter"]`).isChecked();
        await page.locator(xpathInput.enableFeature).setChecked(true);
    })

    await test.step('Clicks on Register button', async () => {
        await page.locator(`${xpathRegisterButton}`).click();
    })
})

