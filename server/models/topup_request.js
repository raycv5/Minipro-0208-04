"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TopUp_Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TopUp_Request.belongsTo(models.User);
    }
  }
  TopUp_Request.init(
    {
      amount: DataTypes.INTEGER,
      status: DataTypes.STRING,
      payment_proof: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TopUp_Request",
    }
  );
  return TopUp_Request;
};
