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
      it("register tester user", async () => {
        const user = {
          "username": "test2",
          "password": "testvalues",
          "first_name": "tester",
          "last_name": "testing",
          "email": "email@email.com"
        };
        const expectedStatusCode = 201;
        const response = await request(server)
          .post("/api/auth/register")
          .send(user);
        expect(response.status).toEqual(expectedStatusCode);
      })
    })
})

test('login tester user', async () => {
  const register = await request(server)
  .post('/api/auth/register')
  .send({
    "username": "test2",
    "password": "testvalues",
    "first_name": "tester",
    "last_name": "testing",
    "email": "email@email.com"
  })
  const login = await request(server)
  .post('/api/auth/login')
  .send({
    "username": "test2",
    "password": "testvalues"
  })
  expect(login.status).toBe(200)

})