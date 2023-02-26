const express = require("express");
const app = express()

const PORT = 3333;

app.use(express.json())

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso1", "Curso2", "Curso3"])
})

app.post("/courses", (req, res) => {
  const body = req.body
  console.log(body);
  return res.json(["Curso1", "Curso2", "Curso3", "Curso4"])
})

app.put("/courses/:id", (req, res) => {
  const params = req.params;
  console.log(params);
  return res.json(["Curso6", "Curso2", "Curso3"])
})

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso6", "Curso2", "Curso3"])
})

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso6", "Curso3"])
})

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`))