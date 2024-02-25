const express = require("express");
const morgan = require("morgan");
const hpRoute = require("./routes/hp.route");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/hp", hpRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = app;
