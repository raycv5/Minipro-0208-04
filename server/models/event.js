"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Event extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Event.belongsTo(models.Organizer);
         Event.belongsTo(models.Country);
         Event.belongsTo(models.City);
         Event.belongsTo(models.Category);
         Event.hasMany(models.Ticket);
         Event.hasMany(models.Transaction);
         Event.hasMany(models.Promotion_Code);
      }
   }
   Event.init(
      {
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         descriptions: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         date: DataTypes.DATE,
         amount: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
         },
         price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
         },
      },
      {
         sequelize,
         modelName: "Event",
      }
   );
   return Event;
};
