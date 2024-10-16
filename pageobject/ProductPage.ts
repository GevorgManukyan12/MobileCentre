import { expect, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.mobilecentre.am/category/phones/138/0/');
  }

  async clickOnProductImage() {
    await this.page.click("//span[@data-ssrc='https://www.mobilecentre.am/img/prodpic/small/06002ec9e8441d57c233New_Project__3_.png']");
  }

  async clickPlusButton(times: number) {
    for (let i = 0; i < times; i++) {
      await this.page.click("//button[contains(@class, 'btn') and contains(@class, 'btn-default') and contains(@class, 'plus')]");
      await this.page.waitForTimeout(500);
    }
  }

  async verifyPrice(expectedPrice: string) {
    await expect(this.page.locator("//span[contains(@class, 'regular')]")).toHaveText(expectedPrice);
  }

  async verifyProductLinkVisible(productId: string) {
    await expect(this.page.locator(`//a[@href='https://www.mobilecentre.am/index.php?m=prod&pid=${productId}']`)).toBeVisible();
  }
}
