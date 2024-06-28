const { Op } = require('sequelize');
require('dotenv').config();
const { Project, Task } = require('../models');

class ProjectService {
  static findAll = async (params) => {
    try {
      let { title } = params;

      let filterOptions = {
        where: {},
        include: {
          model: Task,
          as: 'tasks'
        }
      };

      let titleFilter = {};

      if (title)
        titleFilter = {
          title: {
            [Op.iLike]: `%${title}%`
          }
        };

      filterOptions.where = {
        ...titleFilter
      };

      const projects = Project.findAll(filterOptions);
      return projects;
    } catch (err) {
      throw err;
    }
  };

  static findAllMe = async (userId) => {
    try {
      let filterOptions = {
        where: {
          userId
        },
        include: {
          model: Task,
          as: 'tasks'
        }
      };

      const projects = Project.findAll(filterOptions);
      return projects;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id, userId) => {
    try {
      const filterOptions = {
        where: {
          id,
          userId
        },
        include: {
          model: Task,
          as: 'tasks'
        }
      };

      const project = await Project.findOne(filterOptions);
      if (!project) throw { name: 'ErrorNotFound', message: 'Project Not Found' };

      return project;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const project = await Project.create(params, {
        returning: true
      });
      return project;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;
      const userId = params.body.userId;

      const project = await Project.findOne({
        where: {
          id,
          userId
        }
      });

      if (!project) throw { name: 'ErrorNotFound', message: 'Project not found' };

      const updatedProject = await project.update(body);
      return updatedProject;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id, userId) => {
    try {
      const filterOptions = {
        where: {
          id,
          userId
        }
      };
      const project = await Project.findOne(filterOptions);

      if (!project) throw { name: 'ErrorNotFound', message: 'Project not found' };

      const deletedProject = await project.destroy();
      return deletedProject;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = ProjectService;
