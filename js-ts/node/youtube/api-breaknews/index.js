const express = require("express");
const app = express();
const db = require("./db")

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {

  const database = db
  
  const idHash = Math.floor(Math.random() * 10)
  
  database.push({ id: idHash, name: "Brito", age: 23})

  

  res.json({ database });
})

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`));