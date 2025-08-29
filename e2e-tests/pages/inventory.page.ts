import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertLoggedIn() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addProductToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
