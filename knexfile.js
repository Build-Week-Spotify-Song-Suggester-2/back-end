const pgConnection = process.env.NEW_DATABASE_URL || {
  database: "dummy", //postgres by default
  user: "dummy", //postgres by default
  password: "dummy", //blank by default
};

module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.NEW_DATABASE_URL,
    pool: {
    min: 2,
    max: 10
    },
    migrations: {
    directory: "./data/migrations",
    },
    seeds: {
    directory: "./data/seeds",
    },
},

  

};