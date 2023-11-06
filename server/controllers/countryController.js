
const db = require("../models");
const Country = db.Country;
const City = db.City;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Country.findAll({
        include: [
          {
            model: City,
            attributes: ["id", "city"],
          },
        ],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  add: async (req, res) => {
    try {
      await Country.create(req.body);
      res.status(200).send(`New country added`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },

};
