const {Client} = require('pg')
const client = new Client({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

client.connect()
.then(() => console.log('Connected successfully'))
.then(() => client.query('SELECT * FROM students'))
.then(result => console.table(result.rows))
.catch(e => console.log)
.finally(() => client.end())