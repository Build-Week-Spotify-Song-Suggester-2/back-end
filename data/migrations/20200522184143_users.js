exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments()
        users.string('username', 128)
        .notNullable()
        .unique()
        users.string('password', 128)
        .notNullable()
        users.string('first_name', 128)
        .notNullable()
        users.string('last_name', 128)
        .notNullable()
        users.string('email', 128)
        .notNullable()
        .unique()
    })
    .createTable('songs', songs => {
        songs.increments()
        songs.string('title', 128)
        .notNullable()
        songs.string('artist', 128)
        .notNullable()
        songs.string('album_art', 255)
    })
    .createTable('users_songs', us => {
        us.increments()
        us.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        us.integer('song_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('songs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {

    return knex.schema.dropTableIfExists('users_songs')
    .dropTableIfExists('songs')
    .dropTableIfExists('users')
  };