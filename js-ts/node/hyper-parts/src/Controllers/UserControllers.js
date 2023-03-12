class UserControllers {
  create(req, res) {
    const id = 5;

    res.json({ id: id })
  }
}

module.exports = UserControllers;