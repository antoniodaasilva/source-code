//Definir estrutura básica do projeto

const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid')

//definir porta do servidor
const PORT = 3333;
//permitir o uso do formato JSON
app.use(express.json())

//array para armazenar dados
const customers = []

//método para criar conta
//definir nome do recurso '/account'
app.post('/account', (req, res) => {
  //coletar dados do body da requisição
  const {cpf, name} = req.body;

  //verificar se CPF já existe no array
  const customerAlreadyExist = customers.some(
    (customer) => customer.cpf === cpf
  )

  if (customerAlreadyExist) {
    return res.status(400).json({error: 'Customer already exists!'})
  }


  //salvar dados no array
  customers.push({
    cpf,
    name,
    id: uuidv4(), //gerar ID aleatório
    statement: []
  })

  //devolver mensagem de sucesso
  return res.status(201).send()
})

//método para obter extrato
app.get("/statement", (req, res) => {
  //obter CPF da requisição
  const {cpf} = req.headers

  //verificar se esse CPF esta cadastrado
  const customer = customers.find(customer => customer.cpf === cpf)

  if(!customer) {
    return response.status(400).json({ error: "Customer not found "})
  }

  //caso esteja retornar extrato do cliente
  return res.json(customer.statement)
})

//inicializar servidor na porta definida
//indicar endereço do servidor
app.listen(PORT, console.log(`Server is running on PORT http://localhost:${PORT}`))
