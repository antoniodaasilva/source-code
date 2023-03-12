const { Router } = require("express");
const TaskController = require("../controller/TaskController");

const routes = Router();

routes.get("/", TaskController.getAll);


module.exports = routes;