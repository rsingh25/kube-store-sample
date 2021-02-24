pg = require("pg");

const pool = new pg.Pool({
  host: `${process.env["inventory.db.host"]}`,
  user: `${process.env["inventory.db.user"]}`,
  password: `${process.env["inventory.db.password"]}`,
  database: `${process.env["inventory.db"]}`,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
});

module.exports = {
  pool,
};
