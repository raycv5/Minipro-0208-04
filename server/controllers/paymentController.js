const db = require("../models");
const Payment_Method = db.Payment_Method;

module.exports = {
  add: async (req, res) => {
    try {
      await Payment_Method.create(req.body);
      res.status(200).send("New Payment Method Added");
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
