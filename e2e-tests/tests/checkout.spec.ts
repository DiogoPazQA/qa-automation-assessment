import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('Fluxo de checkout simples', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.assertLoggedIn();

  // Adiciona produto e vai ao carrinho
  await inventoryPage.addProductToCart();
  await inventoryPage.goToCart();

  // Checkout
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Diogo');
  await page.fill('[data-test="lastName"]', 'Paz');
  await page.fill('[data-test="postalCode"]', '80000-000');
  await page.click('[data-test="continue"]');

  // Valida resumo
  await expect(page.locator('.summary_total_label')).toContainText('Total:');

  // Finaliza
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
