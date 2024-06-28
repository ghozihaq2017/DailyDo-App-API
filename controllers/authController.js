const { successResponse } = require('../responses/response');
const AuthService = require('../services/authService');
const bcrypt = require('../libs/bcrypt');
const jwt = require('../libs/jwt');

class AuthController {
  // List Register
  static register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password)
        throw { name: 'ErrorNotFound', message: 'All fields are required!' };

      // console.log(username, email, password);

      const hashPass = bcrypt.hashPassword(password);
      // console.log(hashPass);

      const user = await AuthService.register(email, username, hashPass);

      res.status(201).json(successResponse(user, 'User added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Login
  static login = async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const foundUser = await AuthService.login(username);

      if (bcrypt.comparePassword(password, foundUser.password)) {
        const accessToken = jwt.generateToken({
          userId: foundUser.id,
          username: foundUser.username
        });
        res.status(200).json({ message: 'Login succesfully', accessToken });
      } else {
        throw {
          name: 'Unauthorized',
          message: 'The password entered is incorrect'
        };
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = AuthController;
