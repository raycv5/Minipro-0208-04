"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment_Method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment_Method.hasMany(models.Transaction);
    }
  }
  Payment_Method.init(
    {
      method: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment_Method",
    }
  );
  return Payment_Method;
};
