const express = require('express');
const app = express();
const routes = require("./routes");
app.use(express.json());
app.use(routes);
const PORT = 3332;

app.listen(PORT, console.log(`Server is running on PORT http://localhost:3332`))