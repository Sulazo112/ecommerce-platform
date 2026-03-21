const request = require('supertest');
const app = require('../src/app');

describe("GET /products", () => {
  it("returns a list of products", async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

