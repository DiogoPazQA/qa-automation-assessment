// tests/api/users.test.js
const { test, expect, request } = require('@playwright/test');

function gerarUsuario() {
  const timestamp = Date.now();
  return {
    name: `User_${timestamp}`,
    job: `QA_${Math.floor(Math.random() * 1000)}`
  };
}

test.describe('API Users Tests (JSON Server)', () => {

  let apiContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'http://localhost:3000',
      ignoreHTTPSErrors: true,
    });
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('Criar usuário com massa dinâmica', async () => {
    const userPayload = gerarUsuario();

    const createRes = await apiContext.post('/users', { data: userPayload });
    console.log('Status da criação:', createRes.status());
    expect(createRes.status()).toBe(201);

    const createdUser = await createRes.json();
    expect(createdUser).toHaveProperty('id');
    console.log('Usuário criado:', createdUser);
  });

  test('Listar usuários', async () => {
    const res = await apiContext.get('/users');
    console.log('Status listagem:', res.status());
    expect(res.status()).toBe(200);

    const users = await res.json();
    console.log('Usuários listados:', users.length);
    expect(Array.isArray(users)).toBe(true);
  });

  test('Buscar usuário específico', async () => {
    // Cria um usuário para garantir que exista
    const userPayload = gerarUsuario();
    const createRes = await apiContext.post('/users', { data: userPayload });
    const createdUser = await createRes.json();

    const res = await apiContext.get(`/users/${createdUser.id}`);
    console.log('Status usuário específico:', res.status());
    expect(res.status()).toBe(200);

    const user = await res.json();
    expect(user).toHaveProperty('id', createdUser.id);
    console.log('Usuário buscado:', user);
  });

});
