import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('GET /posts - retorna lista', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);
    expect(response.status()).toBe(200);
    expect(await response.json()).toHaveLength(100);
  });

  test('POST /posts - cria recurso', async ({ request }) => {
    const response = await request.post(`${baseUrl}/posts`, {
      data: { title: 'QA Test', body: 'conteúdo', userId: 1 },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Test');
  });

  test('PUT /posts/1 - atualiza recurso', async ({ request }) => {
    const response = await request.put(`${baseUrl}/posts/1`, {
      data: { title: 'Atualizado' },
    });
    expect(response.status()).toBe(200);
  });

  test('DELETE /posts/1 - deleta recurso', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/posts/1`);
    expect(response.status()).toBe(200);
  });
});
