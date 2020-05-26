const router = require('express').Router()

const Users = require('./user-model')
const restricted = require('../auth/auth-middleware')

router.use(restricted)

router.get('/songs', (req, res) => {
    Users.findSongsByUserId(req.jwt.sub)
    .then(songs => {
        res.status(200).json(songs)
    })
    .catch(err => {
        res.send(err)
    })
})



module.exports = router
