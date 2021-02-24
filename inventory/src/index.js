require("dotenv").config();
const app = require("express")();
const { pool } = require("./db");

app.get("/inventory", (req, resp) => {
  pool.query("select CURRENT_DATE", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
  resp.json({ message: "inventory service" });
});

app.listen(3000, () => console.log("listening at 3000"));
