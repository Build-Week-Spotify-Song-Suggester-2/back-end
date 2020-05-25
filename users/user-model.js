const db = require('../data/db-config.js')

module.exports = {
    find,
    findBy,
    findById,
    add,
    findSongsByUserId
}

function find(){
    return db('users')
}

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
}

function findById(id) {
    return db("users").where({ id }).first();
  }

async function add(user) {
    try{
        const [id] = await db('users').insert(user, 'id')
        return findById(id)
    } catch(error) {
        throw error
    }
}

async function findSongsByUserId(id) {
    try {console.log(findSongsByUserId)
    const data = await db.select('*')
    .from('users_songs')
    .join('songs', 'songs.id', '=', 'users_songs.song_id')
    .join('users', 'users.id', '=', 'users_songs.user_id')
    .where('users.id', id)
    return data
    } catch(error) {
        console.log(error)
        throw(error)
    }
}