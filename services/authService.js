const { Op } = require('sequelize');
require('dotenv').config();
const { User } = require('../models');

class AuthService {
  static register = async (email, username, hashPass) => {
    try {
      // Check if user with email or username already exists
      const foundUser = await User.findOne({
        where: {
          [Op.or]: [{ email }, { username }]
        }
      });

      if (foundUser) {
        throw { name: 'ErrorConflict', message: 'The user with email or username already exists!' };
      }

      // Create new user
      const user = await User.create({
        email,
        username,
        password: hashPass
      });

      if (!user) {
        throw { name: 'NotFoundError', message: 'Failed to create user' };
      }

      return user;
    } catch (err) {
      throw err;
    }
  };

  static async login(username) {
    try {
      const foundUser = await User.findOne({
        where: { username }
      });

      if (!foundUser) {
        throw {
          name: 'ErrorNotFound',
          message: `No user was found with the username: ${username}`
        };
      }

      return foundUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthService;
