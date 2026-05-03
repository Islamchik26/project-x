const  express = require("express");
const cors = require("cors");
const pool = require("./config/db");

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

module.exports = app;