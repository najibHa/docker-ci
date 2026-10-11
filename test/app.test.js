const request = require('supertest');
const app = require('../src/app');

describe('API', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(500); //changed 200 to 500 to spark an error
    expect(res.body.status).toBe('ok');
  });

  test('POST /todos creates a todo', async () => {
    const res = await request(app).post('/todos').send({ title: 'learn devops' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('learn devops');
  });

  test('POST /todos without title returns 400', async () => {
    const res = await request(app).post('/todos').send({});
    expect(res.status).toBe(400);
  });
});
