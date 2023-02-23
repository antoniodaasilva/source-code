const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  
  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();

    const checkIfUserExist = await database.get(
      "SELECT * FROM users WHERE email = (?)", [email]
    );
    
    if (checkIfUserExist) {
      throw new AppError("Este e-mail já está em uso.");
    }
    
    const hashedPassword = await hash(password, 8);
    

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]
      );

    return res.status(201).json({ name, email, hashedPassword });
  }
}

module.exports = UsersController;