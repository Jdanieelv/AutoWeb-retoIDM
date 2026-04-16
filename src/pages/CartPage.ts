import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async hasProducts() {
    return (await this.page.locator('.cart_item').count()) > 0;
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}