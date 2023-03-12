const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList });
  } catch (error) {
    return res.status(500).send({ error: err.message });
  }
};

const createTasks = async (req, res) => {
  const task = req.body;

  if (!task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (error) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
};
