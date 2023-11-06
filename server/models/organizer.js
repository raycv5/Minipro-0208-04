"use strict";
const { Model } = require("sequelize");
const { Organizer_Wallet } = require("./organizer_wallet");
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizer.belongsTo(models.Country);
      Organizer.belongsTo(models.City);
      Organizer.hasOne(models.Organizer_Wallet);
      Organizer.hasMany(models.Event);
    }
  }
  Organizer.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isOrganizer: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Organizer",
    }
  );

  Organizer.afterCreate(async (organizer) => {
    const organizer_wallet = await sequelize.models.Organizer_Wallet.create({
      OrganizerId: organizer.id,
      balance: 0,
    });
  });

  return Organizer;
};
