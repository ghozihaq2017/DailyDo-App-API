'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
      Task.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project'
      });
    }
  }
  Task.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.STRING,
      priority: DataTypes.STRING,
      dueDate: DataTypes.DATE,
      projectId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Task'
    }
  );
  return Task;
};
