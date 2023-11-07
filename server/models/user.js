"use strict";
const { Model } = require("sequelize");
const { Wallet } = require("./wallet");
const { Referral } = require("./referral");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Country);
      User.belongsTo(models.City);
      User.hasOne(models.Wallet);
      User.hasOne(models.Referral);
      User.hasMany(models.Ticket);
      User.hasMany(models.Transaction);
    }
  }
  User.init(
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
      points: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      referrals: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.afterCreate(async (user) => {
    const generateReferralCode = async () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const codeLength = 8;

      let referralCode = "";

      while (true) {
        for (let i = 0; i < codeLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          referralCode += characters.charAt(randomIndex);
        }

        const existingReferral = await sequelize.models.Referral.findOne({
          where: { referral_code: referralCode },
        });

        if (!existingReferral) {
          break;
        }

        referralCode = "";
      }

      return referralCode;
    };

    const wallet = await sequelize.models.Wallet.create({
      UserId: user.id,
      balance: 0,
    });

    const referralCode = await generateReferralCode();

    const referral = await sequelize.models.Referral.create({
      UserId: user.id,
      referral_code: referralCode,
    });
  });

  return User;
};
