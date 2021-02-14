const mysql = require('mysql')

//TODO use connection pool, do not use root auth
const pool = mysql.createPool({
   connectionLimit: 10,
   host: `${process.env['inventory.db.host']}`,
   user: 'root',
   password: `${process.env['inventory.db.password']}`,
   database: `${process.env['inventory.db']}`
});

module.exports = {
   pool
}