const db = require("../models");
const Ticket = db.Ticket;
const Event = db.Event;
const User = db.User;

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await Ticket.findAll({
        where: {
          UserId: req.params.id,
        },
        include: [
          {
            model: Event,
          },
        ],
      });
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
