'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Space.hasMany(models.Surface, { foreignKey: "space" });
    }
  }
  Space.init({
    address: DataTypes.STRING,
    long: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
    type: DataTypes.STRING,
    format: DataTypes.STRING,
    ward: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Space',
  });
  return Space;
};