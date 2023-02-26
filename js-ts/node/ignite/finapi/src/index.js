const { response, request } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();
const customers = [];

app.use(express.json());


//Middleware
function verifyIfExistAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ error: "Customer not found" })
  }

  req.customer = customer;

  return next();

}

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;
  console.log(customers);


  const customersAlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if (customersAlreadyExists) {
    return res.status(400).json({ error: "Customers already exists!"});
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  console.log(customers);

  return res.status(201).send();
  
});

// app.use(verifyIfExistAccountCPF)

app.get("/statement", verifyIfExistAccountCPF, (req, res) => {
  const { customer } = req;

  return res.json(customer.statement)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))