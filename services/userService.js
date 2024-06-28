const { Op } = require('sequelize');
require('dotenv').config();
const { User, Project, Task } = require('../models');

class UserService {
  static findAll = async (params) => {
    try {
      let { email, username } = params;

      let filterOptions = {
        where: {},
        include: {
          model: Project,
          as: 'projects',
          include: {
            model: Task,
            as: 'tasks'
          }
        }
      };

      let emailFilter = {};
      let usernameFilter = {};

      if (email)
        emailFilter = {
          email: {
            [Op.iLike]: `%${email}%`
          }
        };

      if (username)
        usernameFilter = {
          username: {
            [Op.iLike]: `%${username}%`
          }
        };

      filterOptions.where = {
        ...emailFilter,
        ...usernameFilter
      };

      const users = User.findAll(filterOptions);
      return users;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        },
        include: {
          model: Project,
          as: 'projects',
          include: {
            model: Task,
            as: 'tasks'
          }
        }
      };

      const user = await User.findOne(filterOptions);
      if (!user) throw { name: 'ErrorNotFound', message: 'User Not Found' };

      return user;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const user = await User.create(params, {
        returning: true
      });
      return user;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;

      const user = await User.findOne({
        where: {
          id
        }
      });

      if (!user) throw { name: 'ErrorNotFound', message: 'User not found' };

      const updateUser = await user.update(body);
      return updateUser;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        }
      };
      const user = await User.findOne(filterOptions);

      if (!user) throw { name: 'ErrorNotFound', message: 'User not found' };

      const deletedUser = await user.destroy();
      return deletedUser;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;
