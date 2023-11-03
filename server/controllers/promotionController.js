const db = require("../models");
const Promotion_Code = db.Promotion_Code;

module.exports = {
  add: async (req, res) => {
    // Generate promotion code
    const generatePromotionCode = async () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const codeLength = 8;

      let promotionCode = "";

      while (true) {
        for (let i = 0; i < codeLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          promotionCode += characters.charAt(randomIndex);
        }

        const existingCode = await Promotion_Code.findOne({
          where: { code: promotionCode },
        });

        if (!existingCode) {
          break;
        }

        promotionCode = "";
      }

      return promotionCode;
    };

    const promotionCode = await generatePromotionCode();

    try {
      const { name, discount, end_date, EventId } = req.body;

      await Promotion_Code.create({
        name,
        code: promotionCode,
        discount,
        end_date,
        EventId,
      });
      res.status(200).send({ message: "New Promotion Code Generated" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
