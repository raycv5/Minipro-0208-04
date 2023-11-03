"use strict";
const { Model } = require("sequelize");
const { Ticket } = require("./ticket");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User);
      Transaction.belongsTo(models.Event);
      Transaction.hasOne(models.Ticket);
      Transaction.belongsTo(models.Payment_Method);
      Transaction.belongsTo(models.Point_Discount);
      Transaction.belongsTo(models.Promotion_Code);
    }
  }
  Transaction.init(
    {
      initial_price: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      promotion_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );

  Transaction.afterCreate(async (transaction) => {
    const ticket = await sequelize.models.Ticket.create({
      UserId: transaction.UserId,
      EventId: transaction.EventId,
      TransactionId: transaction.id,
    });
  });

  return Transaction;
};
