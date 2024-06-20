'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surface extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Surface.belongsTo(models.Space, { foreignKey: "space" });
      Surface.hasMany(models.Report, { foreignKey: "surface" });
    }
  }
  Surface.init({
    format: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    space: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Surface',
  });
  return Surface;
};