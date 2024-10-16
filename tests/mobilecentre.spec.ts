import { test } from '@playwright/test';
import { ProductPage } from '../pageobject/ProductPage';

test('has title', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.goto();
  await productPage.clickOnProductImage();

  const clicks = 4;
  await productPage.clickPlusButton(clicks);

  await productPage.verifyPrice('58,900դր.');
  await productPage.verifyProductLinkVisible('31009');
  await productPage.verifyProductLinkVisible('31010');
  await productPage.verifyPrice('58,900դր.');
});

