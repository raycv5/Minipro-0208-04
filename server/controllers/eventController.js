const db = require("../models");
const Event = db.Event;
const Category = db.Category;
const Organizer = db.Organizer;
const Country = db.Country;
const City = db.City;
const fs = require("fs");
const city = require("../models/city");

module.exports = {
  getEvent: async (req, res) => {
    try {
      const event = await Event.findAll({
        include: [
          {
            model: Country,
            attributes: ["country"],
          },
          {
            model: Organizer,
            attributes: ["first_name", "last_name"],
          },
          {
            model: Category,
            attributes: ["category"],
          },
          {
            model: City,
            attributes: ["city"],
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

  getById: async (req, res) => {
    try {
      const result = await Event.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Country,
            attributes: ["country"],
          },
          {
            model: Organizer,
            attributes: ["first_name", "last_name"],
          },
          {
            model: Category,
            attributes: ["category"],
          },
          {
            model: City,
            attributes: ["city"],
          },
        ],
      });

      res.status(200).send({ result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  },
  getByCategory: async (req, res) => {
    try {
      const result = await Event.findAll({
        where: {
          CategoryId: req.params.id,
        },
        include: [
          {
            model: Country,
            attributes: ["country"],
          },
          {
            model: Organizer,
            attributes: ["first_name", "last_name"],
          },
          {
            model: Category,
            attributes: ["category"],
          },
          {
            model: City,
            attributes: ["city"],
          },
        ],
      });

      res.status(200).send({ result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  },
  getByCountry: async (req, res) => {
    try {
      const result = await Event.findAll({
        where: {
          CountryId: req.params.id,
        },
        include: [
          {
            model: Country,
            attributes: ["country"],
          },
          {
            model: Organizer,
            attributes: ["first_name", "last_name"],
          },
          {
            model: Category,
            attributes: ["category"],
          },
          {
            model: City,
            attributes: ["city"],
          },
        ],
      });

      res.status(200).send({ result });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  },
  getByOrganizerId: async (req, res) => {
    try {
      const response = await Event.findAll({
        where: {
          OrganizerId: req.params.id,
        },
      });
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: error.message });
    }
  },
};
