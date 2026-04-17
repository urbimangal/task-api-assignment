const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {
  test('should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', priority: 'high' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });

  test('should assign a task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Assign Task', priority: 'high' });

    const id = createRes.body.id;

    const res = await request(app)
      .patch(`/tasks/${id}/assign`)
      .send({ userId: 'user123' });

    expect(res.statusCode).toBe(200);
    expect(res.body.assignedTo).toBe('user123');
  });
});