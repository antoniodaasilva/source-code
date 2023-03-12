const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)


app.listen(PORT, () =>
  console.log(`Server is running on PORT http://localhost:${PORT}`)
);
