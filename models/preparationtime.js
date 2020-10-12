'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreparationTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PreparationTime.init({
    time: DataTypes.INTEGER,
    measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PreparationTime',
  });
  return PreparationTime;
};