const pg = require('pg')
const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'evento',
    password: '123456',
    port:5432,
})
console.log('Conectou')
module.exports = client
