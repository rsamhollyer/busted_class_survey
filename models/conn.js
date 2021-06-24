require('dotenv').config()

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const pgp = require('pg-promise')({query(e) {
    console.log(`QUERY : ${e.query}`);
  },});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;