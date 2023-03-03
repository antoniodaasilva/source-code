const express = require('express')
const app = express()

const PORT = 3332;

app.get("/", (req, res) => {
  res.send("Ola mundo")
})

app.listen(PORT, console.log(`Server is running on PORT http://localhost:3332`))