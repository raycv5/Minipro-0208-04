const db = require("../models");

const User = db.User;
const Country = db.Country;
const City = db.City;
const Wallet = db.Wallet;
const Referral = db.Referral;
const Transaction = db.Transaction;
const Event = db.Event;

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await User.findAndCountAll({
        include: [
          {
            model: Country,
            attributes: ["country"],
          },
          {
            model: City,
            attributes: ["city"],
          },
          {
            model: Wallet,
            attributes: ["balance"],
          },
          {
            model: Referral,
            attributes: ["referral_code"],
          },
          {
            model: Transaction,
          },
        ],
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  register: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        CountryId,
        CityId,
        referrals,
      } = req.body;

      const isEmailExist = await User.findOne({
        where: {
          email,
        },
      });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      if (isEmailExist) {
        res.status(409).send({ message: "Email already registered" });
      }

      if (referrals !== "") {
        const isReferralExist = await Referral.findOne({
          where: {
            referral_code: referrals,
          },
          include: [
            {
              model: User,
              attributes: ["points"],
            },
          ],
        });
        if (!isReferralExist) {
          return res.status(400).send({ message: "Invalid Referral Code" });
        }

        console.log(isReferralExist);
        let userPoints = isReferralExist.User.points + 20;
        let newUserPoints = 20;

        await User.update(
          {
            points: userPoints,
          },
          {
            where: {
              id: isReferralExist.UserId,
            },
          }
        );

        await User.create({
          first_name,
          last_name,
          email,
          password: hashPassword,
          CountryId,
          CityId,
          referrals,
          points: newUserPoints,
        });

        res.status(200).send(`New User Created With Referral Code`);
      } else {
        await User.create({
          first_name,
          last_name,
          email,
          password: hashPassword,
          CountryId,
          CityId,
          referrals,
        });
        res.status(200).send(`New User Created`);
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const isUserExist = await User.findOne({
        where: {
          email,
        },
      });

      if (!isUserExist) {
        return res.status(409).send({
          message: "Invalid Email",
        });
      }

      const isValid = await bcrypt.compare(password, isUserExist.password);

      if (!isValid) {
        return res.status(400).send({
          message: "Incorrect Password",
        });
      }

      const payload = { id: isUserExist.id };
      const token = jwt.sign(payload, "JCWD0208", { expiresIn: "1h" });

      res.status(200).send({
        message: "Login Success",
        isUserExist,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  keepLogin: async (req, res) => {
    try {
      const result = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
};
