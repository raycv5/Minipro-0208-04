const db = require("../models");
const TopUp_Request = db.TopUp_Request;
const Wallet = db.Wallet;

module.exports = {
  getAll: async (req, res) => {
    try {
      const response = await TopUp_Request.findAll({
        where: {
          UserId: req.params.id,
        },
      });
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  getPending: async (req, res) => {
    try {
      const response = await TopUp_Request.findAll({
        where: {
          status: "pending",
        },
      });
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  topupRequest: async (req, res) => {
    try {
      const { amount, UserId, payment_proof } = req.body;
      await TopUp_Request.create({
        amount,
        UserId,
        payment_proof,
        status: "pending",
      });
      res.status(200).send(`Request Created`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  handleRequest: async (req, res) => {
    try {
      const { id, status } = req.body;

      const topUpRequest = await TopUp_Request.findOne({
        where: {
          id: id,
        },
      });

      if (status === "accepted") {
        const userWallet = await Wallet.findOne({
          where: {
            UserId: topUpRequest.UserId,
          },
        });

        let userBalance = userWallet.balance + topUpRequest.amount;

        await Wallet.update(
          {
            balance: userBalance,
          },
          {
            where: {
              UserId: topUpRequest.UserId,
            },
          }
        );

        await TopUp_Request.update(
          {
            status: "success",
          },
          {
            where: {
              id: topUpRequest.id,
            },
          }
        );
      }
      res.status(200).send(`Balance added to user's wallet`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
