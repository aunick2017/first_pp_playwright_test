const { test, expect } = require('@playwright/test');

test('Test that should pass', async ({ page }) => {
  await page.goto('https://tvl-purchasepath-fe.kaos.internal.nibit.com.au/');
  await page.getByText('Single Trip').click();
  await page.locator('#destinationCountrySearch').click();
  await page.locator('#destinationCountrySearch').click();
  await page.locator('#destinationCountrySearch').fill('vietnam');
  await page.getByText('Vietnam').click();

  await page.locator('#homeCountrySearch').click();
  await page.locator('#homeCountrySearch').fill('australia');
  await page.getByTestId('combobox-item-label').getByText('Australia').click();
  await page.getByTestId('age').click();
  await page.getByTestId('age').fill('30');

  // Dummy assertion that is guaranteed to pass
  await expect(page).toHaveURL('https://tvl-purchasepath-fe.kaos.internal.nibit.com.au/');
});


test('Test that should fail', async ({ page }) => {
  await page.goto('https://tvl-purchasepath-fe.kaos.internal.nibit.com.au/');
  await page.getByText('Single Trip').click();
  await page.locator('#destinationCountrySearch').click();
  await page.locator('#destinationCountrySearch').click();
  await page.locator('#destinationCountrySearch').fill('vietnam');
  await page.getByText('Vietnam').click();

  await page.locator('#homeCountrySearch').click();
  await page.locator('#homeCountrySearch').fill('australia');
  await page.getByTestId('combobox-item-label').getByText('Australia').click();
  await page.getByTestId('age').click();
  await page.getByTestId('age').fill('30');

  // Dummy assertion that is guaranteed to fail
  await expect(page).toHaveURL('https://tvl-purchasepath-fe.kaos.internal.nibit.com.au/fail');
});
