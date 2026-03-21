const request = require('supertest');
const app = require('../src/app');

describe("POST /orders", () => {
  it("places an order", async () => {
    const res = await request(app)
      .post('/orders')
      .send({ productId: 1, quantity: 2 });

    expect(res.statusCode).toBe(200);
  });

  it("returns 400 for missing fields", async () => {
    const res = await request(app)
      .post('/orders')
      .send({});

    expect(res.statusCode).toBe(400);
  });
});

