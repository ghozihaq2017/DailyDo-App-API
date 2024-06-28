const { successResponse } = require('../responses/response');
const ProjectService = require('../services/projectService');

class ProjectController {
  // List All Project
  static findAll = async (req, res, next) => {
    try {
      const projects = await ProjectService.findAll(req.query);

      res.status(200).json(successResponse(projects, 'Get all Projects success'));
    } catch (err) {
      next(err);
    }
  };

  // Get Project by id
  static findAllMe = async (req, res, next) => {
    try {
      const projects = await ProjectService.findAllMe(req.loggedUser.id);

      res.status(200).json(successResponse(projects, 'Get all my projects Projects success'));
    } catch (err) {
      next(err);
    }
  };

  // Get Project by id
  static findOne = async (req, res, next) => {
    try {
      const project = await ProjectService.findOne(req.params.id, req.loggedUser.id);

      res.status(200).json(successResponse(project, 'Get detail Project success'));
    } catch (err) {
      next(err);
    }
  };

  // Add Project
  static create = async (req, res, next) => {
    try {
      const params = {
        title: req.body.title,
        description: req.body.description,
        userId: req.loggedUser.id
      };
      const project = await ProjectService.create(params);

      res.status(201).json(successResponse(project, 'Project created successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update Project
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: {
          title: req.body.title,
          description: req.body.description,
          userId: req.loggedUser.id
        }
      };

      const project = await ProjectService.update(params);

      res.status(200).json(successResponse(project, 'Project updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Project
  static destroy = async (req, res, next) => {
    try {
      const deletedProject = await ProjectService.destroy(req.params.id,req.loggedUser.id);

      res.status(200).json(successResponse(deletedProject, 'Project deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ProjectController;
