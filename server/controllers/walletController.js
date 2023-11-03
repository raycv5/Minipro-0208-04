const db = require("../models");
const Wallet = db.Wallet;

module.exports = {
  topUp: async (req, res) => {
    try {
      const { balance, id } = req.body;

      const userWallet = await Wallet.findOne({
        where: {
          id: id,
        },
      });

      const userBalance = userWallet.balance;

      await Wallet.update(
        {
          balance: userBalance + balance,
        },
        {
          where: {
            UserId: id,
          },
        }
      );
      res.status(200).send(`Top up success`);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
