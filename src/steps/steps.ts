import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let page: Page;
let loginPage: LoginPage;
let inventory: InventoryPage;
let cart: CartPage;
let checkout: CheckoutPage;

// logueo

Given('que abro la aplicación', async function () {
  page = this.page;
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('inicio sesión con {string} y {string}', async function (user, pass) {
  await loginPage.login(user, pass);
});

Then('debo ver la página de productos', async function () {
  await expect(page).toHaveURL(/inventory/);
});

Then('debo ver error de login', async function () {
  const error = await loginPage.getError();
  expect(error).toBeTruthy();
});

// inventario

When('agrego un producto al carrito', async function () {
  inventory = new InventoryPage(page);
  await inventory.addFirstProduct();
});

When('voy al carrito', async function () {
  await inventory.goToCart();
});

// carrito

Then('veo productos en el carrito', async function () {
  cart = new CartPage(page);
  const hasItems = await cart.hasProducts();
  expect(hasItems).toBeTruthy();
});

// checkout

When('realizo el checkout', async function () {
  checkout = new CheckoutPage(page);
  await cart.checkout();
  await checkout.fillForm();
  await checkout.finish();
});

//confirmacion

Then('veo confirmación de compra', async function () {
  const message = await checkout.getConfirmation();
  await expect(message).toContainText('Thank you');
});

// error
Then('fuerzo un error', async function () {
  throw new Error('Error intencional para validar screenshot');
});