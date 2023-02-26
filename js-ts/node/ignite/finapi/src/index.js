const { response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();
const customers = [];

app.use(express.json());

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

const PORT = 3333;
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))