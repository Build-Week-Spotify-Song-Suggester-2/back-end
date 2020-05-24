const server = require('../server')
const request = require('supertest')
const db = require('../data/db-config')

beforeEach(async () => {
    await db('users').truncate()
})

it("should return 404 for bad url", async () => {
    const expectedStatusCode = 404;
    const response = await request(server).get("/api/user");
    expect(response.status).toEqual(expectedStatusCode);
  });

 describe("server.js", () => {
    describe("register", () => {
      it("should fail to register user", async () => {
        const user = {
          "username": "test2",
          "password": "testvalues"
        };
        const expectedStatusCode = 500;
        const response = await request(server)
          .post("/api/auth/register")
          .send(user);
        expect(response.status).toEqual(expectedStatusCode);
      })
    })
})