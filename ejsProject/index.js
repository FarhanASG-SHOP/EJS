const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("EJS Server is up and Running");
});

app.listen(port, () => {
  console.log("EJS practice project Server is up and Running");
});
