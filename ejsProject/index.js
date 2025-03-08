const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const pLanguages = [];

app.get("/", (req, res) => {
  res.render("index", { languages: pLanguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const language = req.body.language;
  pLanguages.push(language);
  res.redirect("/");
  console.log(pLanguages);
});

app.listen(port, () => {
  console.log("EJS practice project Server is up and Running");
});
