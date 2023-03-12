const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sobre", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`))