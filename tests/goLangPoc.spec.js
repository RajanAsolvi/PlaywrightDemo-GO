// @ts-check
require('dotenv').config()
const { test, expect } = require('@playwright/test');

/*test('allegro web tests', async ({ page }) => {
  await page.goto('https://allegro.pl/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Allegro/);
  //await page.pause();
  await page.getByTestId('accept_home_view_action').click();
  await page.getByPlaceholder('czego szukasz?').dblclick();
  await page.getByPlaceholder('czego szukasz?').fill('Lego');
  await page.getByRole('button', { name: 'szukaj' }).click();
  await page.waitForTimeout(3000)
});*/

test('quidlo web tests', async ({ page }) => {
  const baseUrl = process.env.BASE_URL;
  const userName = process.env.USERNAME1;
  const password = process.env.PASSWORD;

  //await page.goto('https://www.quidlo.com/timesheets/');
  await page.goto(baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/FREE Online Timesheets for Employees/);
  //await page.pause();
  await page.getByRole('link', { name: 'Agree' }).click();
  await page.locator('#menu').getByRole('link', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'Check out all features' }).click();
  await page.waitForTimeout(3000)
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill(userName);
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill(password);
  await page.waitForTimeout(3000)
  await page.pause();
});



