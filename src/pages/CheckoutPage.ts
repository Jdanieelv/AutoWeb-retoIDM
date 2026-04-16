import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillForm() {
    await this.page.fill('#first-name', 'QA');
    await this.page.fill('#last-name', 'Tester');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

async getConfirmation() {
  return this.page.locator('.complete-header');
}
}