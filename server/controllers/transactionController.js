const db = require("../models");
const User = db.User;
const Transaction = db.Transaction;
const Point_Discount = db.Point_Discount;
const Wallet = db.Wallet;
const Event = db.Event;
const Organizer_Wallet = db.Organizer_Wallet;
const Promotion_Code = db.Promotion_Code;

module.exports = {
  buy: async (req, res) => {
    try {
      const {
        EventId,
        UserId,
        PaymentMethodId,
        PointDiscountId,
        PromotionCodeId,
        promotion_code,
      } = req.body;

      const event = await Event.findOne({
        where: {
          id: EventId,
        },
      });

      let price = event.dataValues.price;
      console.log(price);

      // Check if user use a point promotion
      if (PointDiscountId !== null) {
        const pointDiscounted = await Point_Discount.findOne({
          where: {
            id: Number(PointDiscountId),
          },
        });

        price = price - price * Number(pointDiscounted.dataValues.discount);

        const userBuyer = await User.findOne({
          where: {
            id: UserId,
          },
        });

        let userPoint = userBuyer.dataValues.points;

        // Updating user table, substracting its point
        await User.update(
          {
            points: userPoint - pointDiscounted.dataValues.point_cost,
          },
          {
            where: {
              id: UserId,
            },
          }
        );
      }

      //Check if user use a promotion code
      let promotionId;
      if (promotion_code !== "") {
        const promotionCode = await Promotion_Code.findOne({
          where: {
            code: promotion_code,
          },
        });

        if (!promotionCode || EventId !== promotionCode.dataValues.EventId) {
          return res.status(400).send({ message: "Invalid Promotion Code" });
        }

        price = price - price * Number(promotionCode.dataValues.discount);
        promotionId = promotionCode.dataValues.id;
      }

      const userWallet = await Wallet.findOne({
        where: {
          id: UserId,
        },
      });
      const organizerWallet = await Organizer_Wallet.findOne({
        where: {
          id: event.dataValues.OrganizerId,
        },
      });
      const organizerBalance = organizerWallet.dataValues.balance;

      let isEnough = userWallet.dataValues.balance >= price;

      if (!isEnough)
        return res
          .status(400)
          .send(`You don't have enough money to buy this ticket`);

      await Wallet.update(
        {
          balance: userWallet.dataValues.balance - price,
        },
        {
          where: {
            id: UserId,
          },
        }
      );

      await Organizer_Wallet.update(
        {
          balance: organizerBalance + price,
        },
        {
          where: {
            id: event.dataValues.OrganizerId,
          },
        }
      );

      const eventTicket = event.dataValues.amount - 1;

      await Event.update(
        {
          amount: eventTicket,
        },
        {
          where: {
            id: event.dataValues.id,
          },
        }
      );

      await Transaction.create({
        initial_price: event.dataValues.price,
        total_price: price,
        EventId,
        UserId,
        PaymentMethodId,
        PointDiscountId,
        PromotionCodeId: promotionId,
        promotion_code,
      });
      res.status(200).send({
        message: `Transaction Success`,
        initial_price: event.dataValues.price,
        total_price: price,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  checkPromotion: async (req, res) => {
    const { promotion_code, EventId } = req.body;
    try {
      const promotion = await Promotion_Code.findOne({
        where: {
          code: promotion_code,
        },
      });

      if (promotion && promotion.EventId === EventId) {
        return res.status(200).send(promotion);
      }

      res.status(400).send("Invalid Promotion Code");
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
