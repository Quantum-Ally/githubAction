const request = require('supertest');
const app = require('../src/app');
let server;

beforeAll(() => {
  server = app.listen(0); // Use any available port
});

afterAll((done) => {
  server.close(done);
});

describe('API Tests', () => {
  test('GET / should return Hello, World!', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
}); 