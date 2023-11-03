"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Point_Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Point_Discount.hasMany(models.Transaction);
    }
  }
  Point_Discount.init(
    {
      point_cost: DataTypes.INTEGER,
      discount: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Point_Discount",
    }
  );
  return Point_Discount;
};
