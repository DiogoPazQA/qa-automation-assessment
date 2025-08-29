import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    ignoreHTTPSErrors: true,  // <- ignora SSL inválido
  },
});
