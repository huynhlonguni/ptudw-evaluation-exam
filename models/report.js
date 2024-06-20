'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.Surface, {
        foreignKey: {
          name: "surface",
          allowNull: true,
        }
      });
    }
  }
  Report.init({
    surface: DataTypes.INTEGER,
    address: DataTypes.STRING,
    long: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
    report_date: DataTypes.DATE,
    content: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    state: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};