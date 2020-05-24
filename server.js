const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const userRouter = require('./users/user-router')
const authRouter = require('./auth/auth-router')
const songRouter = require('./songs/song-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)
server.use('/api/songs', songRouter)

server.get('/', (req, res) => {
    res.json({ api: 'up and running'})
})

module.exports = server