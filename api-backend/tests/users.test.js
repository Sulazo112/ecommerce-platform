const request = require('supertest');
const app = require('../src/app');

describe("POST /users/login", () => {
  it("logs in with correct credentials", async () => {
    const res = await request(app)
      .post('/users/login')
      .send({ username: "admin", password: "password" });

    expect(res.statusCode).toBe(200);
  });

  it("fails with incorrect credentials", async () => {
    const res = await request(app)
      .post('/users/login')
      .send({ username: "wrong", password: "wrong" });

    expect(res.statusCode).toBe(401);
  });
});

