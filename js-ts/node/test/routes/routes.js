const { Router } = require("express");
const TaskController = require("../controller/TaskController");

const routes = Router();

routes.get("/", TaskController.getAll);
routes.post("/create", TaskController.createTasks);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);

module.exports = routes;
