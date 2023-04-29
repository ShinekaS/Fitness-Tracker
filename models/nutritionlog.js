'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutritionlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nutritionlog.init({
    Water_oz: DataTypes.STRING,
    Food: DataTypes.STRING,
    Calories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nutritionlog',
  });
  return Nutritionlog;
};