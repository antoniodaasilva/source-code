import express from "express";
import { categoriesRoutes } from "./src/categories.routes";

const app = express();

const PORT = 3333;

app.use(express.json());

app.use(categoriesRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
