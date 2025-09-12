import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage.js';
import { ProductsPage } from './pages/ProductsPage.js';
import { CartPage } from './pages/CartPage.js';

test('Fluxo completo de checkout', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addToCart('Sauce Labs Backpack');
  await products.goToCart();

  await cart.checkout();

  await expect(page).toHaveURL(/checkout-step-one.html/);
});
