const { Router } = require('express');
const userRoutes = Router();

const UserControllers = require("../Controllers/UserControllers");
const userController = new UserControllers();

userRoutes.get("/", userController.create);

module.exports = userRoutes;