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

async function add(song) {
    try{
        const [id] = await db('songs').insert(song, 'id')
        return findById(id)
    } catch(error) {
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