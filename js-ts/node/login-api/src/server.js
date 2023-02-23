require("express-async-errors")
const express = require("express");
const app = express();
const routes = require("./routes")
const AppError = require("./utils/AppError")

app.use(express.json());
app.use(routes)

app.use((error, req, res,next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})


const PORT = 3003
app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`));