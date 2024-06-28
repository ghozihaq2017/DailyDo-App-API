const { successResponse } = require('../responses/response');
const TaskService = require('../services/taskService');

class TaskController {
  // List All Task
  static findAll = async (req, res, next) => {
    try {
      const tasks = await TaskService.findAll(req.query);

      res.status(200).json(successResponse(tasks, 'Get all Tasks success'));
    } catch (err) {
      next(err);
    }
  };

  // Get Task by id
  static findOne = async (req, res, next) => {
    try {
      const task = await TaskService.findOne(req.params.id);

      res.status(200).json(successResponse(task, 'Get detail Task success'));
    } catch (err) {
      next(err);
    }
  };

  // Add Task
  static create = async (req, res, next) => {
    try {
      const task = await TaskService.create(req.body);

      res.status(201).json(successResponse(task, 'Task created successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update Task
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body
      };

      const task = await TaskService.update(params);

      res.status(200).json(successResponse(task, 'Task updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Task
  static destroy = async (req, res, next) => {
    try {
      const deletedTask = await TaskService.destroy(req.params.id);

      res.status(200).json(successResponse(deletedTask, 'Task deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TaskController;
