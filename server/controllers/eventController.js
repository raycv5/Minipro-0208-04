const db = require("../models");
const Event = db.Event;
const Category = db.Category;
const Organizer = db.Organizer;
const Country = db.Country;
const fs = require("fs");

module.exports = {
   getEvent: async (req, res) => {
      try {
         const event = await Event.findAll({
            include: [
               {
                  model:Country,
                  attributes:['country']
               },
               {
                  model: Organizer,
                  attributes: ["first_name", "last_name"],
               },
               {
                  model: Category,
                  attributes: ["category"],
               },
            ],
         });
         res.status(200).send({ event });
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   registEvent: async (req, res) => {
      try {
         const {
            name,
            descriptions,
            date,
            amount,
            price,
            CountryId,
            CityId,
            CategoryId,
            OrganizerId,
         } = req.body;
         let image = null;

         if (req.file) {
            image = req.file?.path;
         }

         await Event.create({
            name,
            image,
            descriptions,
            date,
            amount,
            price,
            CountryId,
            CityId,
            CategoryId,
            OrganizerId,
         });
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
};
