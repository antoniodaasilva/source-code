const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const PORT = 3456;

const customers = [];

function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);


  if (!customer) {
    return res.status(400).json({ error: "Customer not found" })
  }

  req.customer = customer

  return next();
}

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customersAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customersAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists!" });
  }

  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: [],
  });

  return res.status(201).send();
});




app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = request;

  return res.json(customer.statement);
});

app.listen(
  PORT,
  console.log(`Server is running on port http://localhost:${PORT}`)
);
