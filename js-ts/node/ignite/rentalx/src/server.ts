import express from "express";

const app = express();

const PORT = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () =>  console.log(`Server is running on PORT http://localhost:${PORT}`));
