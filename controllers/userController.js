const { successResponse } = require('../responses/response');
const UserService = require('../services/userService');

class UserController {
  // List All User
  static findAll = async (req, res, next) => {
    try {
      const users = await UserService.findAll(req.query);

      res.status(200).json(successResponse(users, 'Get all Users success'));
    } catch (err) {
      next(err);
    }
  };

  // List User by id
  static findOne = async (req, res, next) => {
    try {
      const user = await UserService.findOne(req.params.id);

      res.status(200).json(successResponse(user, 'Get detail User success'));
    } catch (err) {
      next(err);
    }
  };

    // Get Logged User
    static findOwnProfile = async (req, res, next) => {
      try {
        const user = await UserService.findOne(req.loggedUser.id);
  
        res.status(200).json(successResponse(user, 'Get my profile success'));
      } catch (err) {
        next(err);
      }
    };

  // Add User
  static create = async (req, res, next) => {
    try {
      const user = await UserService.create(req.body);

      res.status(201).json(successResponse(user, 'User added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update User
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body
      };

      const user = await UserService.update(params);

      res.status(200).json(successResponse(user, 'User updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Movie
  static destroy = async (req, res, next) => {
    try {
      const deletedUser = await UserService.destroy(req.params.id);

      res.status(200).json(successResponse(deletedUser, 'User deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
