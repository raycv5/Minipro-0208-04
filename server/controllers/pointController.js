const db = require("../models");
const Point_Discount = db.Point_Discount;

module.exports = {
  add: async (req, res) => {
    try {
      Point_Discount.create(req.body);
      res.status(200).send({
        message: "New Point Discount Added",
        discount: req.body.discount,
        const: req.body.point_cost,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
