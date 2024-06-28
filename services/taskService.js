const { Op } = require('sequelize');
require('dotenv').config();
const { Task } = require('../models');

class TaskService {
  static findAll = async (params) => {
    try {
      let { name } = params;

      let filterOptions = {
        where: {}
      };

      let nameFilter = {};

      if (name)
        nameFilter = {
          name: {
            [Op.iLike]: `%${name}%`
          }
        };

      filterOptions.where = {
        ...nameFilter
      };

      const tasks = Task.findAll(filterOptions);
      return tasks;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        }
      };

      const task = await Task.findOne(filterOptions);
      if (!task) throw { name: 'ErrorNotFound', message: 'Task Not Found' };

      return task;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const task = await Task.create(params, {
        returning: true
      });
      return task;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;

      const task = await Task.findOne({
        where: {
          id
        }
      });

      if (!task) throw { name: 'ErrorNotFound', message: 'Task not found' };

      const updatedTask = await task.update(body);
      return updatedTask;
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
      const task = await Task.findOne(filterOptions);

      if (!task) throw { name: 'ErrorNotFound', message: 'Task not found' };

      const deletedTask = await task.destroy();
      return deletedTask;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = TaskService;
