import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstProduct() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}