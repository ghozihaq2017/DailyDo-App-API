'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // define association here
      Project.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      Project.hasMany(models.Task, {
        foreignKey: 'projectId',
        as: 'tasks'
      });
    }
  }
  Project.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Project'
    }
  );
  return Project;
};
