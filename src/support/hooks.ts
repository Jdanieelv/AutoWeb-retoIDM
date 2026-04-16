import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  await this.init();
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    await this.page.screenshot({
      path: `reports/error-${Date.now()}.png`
    });
  }
  await this.close();
});