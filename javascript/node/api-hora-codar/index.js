//configuração incial
const express = require("express");
const app = express()


//forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//rota inicial / endpoint
app.get('/', (req, res) => {
  res.send("Ola mundo")
})

app.get('/hello', (req, res) => {
  res.json({message: 'Hello'})
})

//entregar uma porta
const PORT = 3333

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`))