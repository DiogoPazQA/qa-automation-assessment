// tests/mobileLogin.test.js
import { test, expect, devices } from '@playwright/test';

// Seleciona um dispositivo mobile pronto (ex: iPhone 12)
const iPhone = devices['iPhone 12'];

test.use({
  ...iPhone,
  baseURL: 'https://www.saucedemo.com/',
});

test('Login mobile no SauceDemo', async ({ page }) => {
  // Vai direto para a página de login
  await page.goto('/');

  // Preenche usuário e senha
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Clica no botão de login
  await page.click('#login-button');

  // Valida que chegou na página de produtos
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
