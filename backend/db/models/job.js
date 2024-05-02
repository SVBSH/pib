'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    company: DataTypes.STRING,
    logo: DataTypes.STRING,
    logoBackground: DataTypes.STRING,
    position: DataTypes.STRING,
    postedAt: DataTypes.STRING,
    contract: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING,
    apply: DataTypes.STRING,
    description: DataTypes.TEXT,
    content: DataTypes.TEXT,
    hidden: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};