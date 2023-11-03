const db = require("../models");
const City = db.City;

module.exports = {
  add: async (req, res) => {
    try {
      await City.create(req.body);
      res.status(200).send(`New city added`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await City.findAll();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
