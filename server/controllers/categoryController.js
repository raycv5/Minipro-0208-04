const db = require("../models");
const Category = db.Category;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Category.findAll();
      res.status(200).send(result);
    } catch (er) {
      console.log(err);
      res.status(400).send({ mesage: err.mesage });
    }
  },

  add: async (req, res) => {
    try {
      await Category.create(req.body);
      res.status(200).send(`New Category (${req.body.category}) Added`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ mesage: err.mesage });
    }
  },
};
