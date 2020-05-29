const server = require('../server')
const request = require('supertest')
const db = require('../data/db-config')

beforeEach(() => {
    return db.migrate
      .rollback()
      .then(() => db.migrate.latest())
    
  });

test('add song for user', async () => {
    const register = await request(server)
    .post('/api/auth/register')
    .send({
        "username": "test1",
        "password": "1234",
        "first_name": "test",
        "last_name": "test",
        "email": "test@email.com"
    })
    const login = await request(server)
    .post('/api/auth/login')
    .send({
        "username": "test1",
        "password": "1234"
    })
    const addSong = await request(server)
    .post('/api/songs')
    .send({
        "title": "test",
        "artist": "test"
    })
    expect(login.status).toBe(200)
})

test('update song on database', async () => {
    const register = await request(server)
    .post('/api/auth/register')
    .send({
        "username": "test3",
        "password": "1234",
        "first_name": "test",
        "last_name": "test",
        "email": "test@email.com"
    })
    const login = await request(server)
    .post('/api/auth/login')
    .send({
        "username": "test3",
        "password": "1234"
    })
    const updateSong = await request(server)
    .put('/api/songs/:id')
    .send({
        "title": "test",
        "artist": "test"
    })
    expect(login.status).toBe(200)
})

test('delete song from database', async () => {
    const register = await request(server)
    .post('/api/auth/register')
    .send({
        "username": "test1",
        "password": "1234",
        "first_name": "test",
        "last_name": "test",
        "email": "test@email.com"
    })
    const login = await request(server)
    .post('/api/auth/login')
    .send({
        "username": "test1",
        "password": "1234"
    })
    const delSong = await request(server)
    .delete('/api/songs/:id')
    .send({
        "title": "test",
        "artist": "test"
    })
    expect(login.status).toBe(200)
})
