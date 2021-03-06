const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove

}

function find(){
    return db('songs')
}


function findById(id) {
    return db("songs")
    .where({ id })
    .first();
  }

async function add(song, userID) {
    try{
        const [id] = await db('songs').insert(song, 'id')
        const userSong = await db('users_songs').insert({song_id:id, user_id:userID}).returning('*')
        console.log(userSong)
        return findById(id)
    
    } catch(error) {
        console.log(error)
        throw error
    }
}

function update(changes, id) {
    return db('songs')
    .where({id})
    .update(changes)
    .then(res => {
        return findById(id)
    })    
}

function remove(id) {
    return db('songs')
    .where({id})
    .del()
}