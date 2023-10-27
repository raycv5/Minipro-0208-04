"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promotion_Code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promotion_Code.belongsTo(models.Event);
      Promotion_Code.hasMany(models.Transaction);
    }
  }
  Promotion_Code.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      end_date: DataTypes.DATE,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Promotion_Code",
    }
  );
  return Promotion_Code;
};
