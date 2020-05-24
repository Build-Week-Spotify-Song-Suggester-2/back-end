const router = require('express').Router()

const Songs = require('./song-model')
const restricted = require('../auth/auth-middleware')

router.use(restricted)

router.get('/', (req, res) => {
    Songs.find()
    .then(songs => {
        res.status(200).json(songs)
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    Songs.findById(id)
    .then(song => {
        if(song) {
            res.json(song)
        } else {
            res.status(404).json({message: 'Could not find a song with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to retrieve songs'})
    })
})

router.post('/', (req, res) => {
    const songInfo = req.body

    Songs.add(songInfo)
    .then(song => {
        res.status(201).json(song)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to add song'})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body

    Songs.findById(id)
    .then(song => {
        if(song) {
            Songs.update(changes, id)
            .then(updatedSong => {
                res.json(updatedSong)
            })
        } else {
            res.status(404).json({message: 'Could not find song with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to update song'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    Songs.remove(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'Could not find song with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to delete song'})
    })
})


module.exports = router
