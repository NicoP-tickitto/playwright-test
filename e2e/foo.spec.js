const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');
  // const name = await page.innerText('.navbar__title');
  // expect(name).toBe('Playwright');
});