const db = require("../models");
const Organizer = db.Organizer;
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const organizerTransporter = require("../middleware/organizerTransporter");

module.exports = {
   getAll: async (req, res) => {
      try {
         const result = await Organizer.findAll();
         res.status(200).send(result);
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   register: async (req, res) => {
      try {
         const { first_name, last_name, email, password, CountryId, CityId } =
            req.body;
         const isEmailExist = await Organizer.findOne({
            where: {
               email,
            },
         });
         if (isEmailExist) {
            res.status(409).send({ message: "Email already exists" });
         }
         const salt = await bcrypt.genSalt(10);
         const hasPassword = await bcrypt.hash(password, salt);
         await Organizer.create({
            first_name,
            last_name,
            email,
            password: hasPassword,
            CountryId,
            CityId,
         });
         res.status(200).send({ message: "Success" });
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   login: async (req, res) => {
      try {
         const { email, password } = req.query;
         const isOrganizerExist = await Organizer.findOne({
            where: {
               email,
            },
         });
         if (!isOrganizerExist) {
            return res.status(404).send({ message: "Account not found" });
         }

         const isValid = await bcrypt.compare(
            password,
            isOrganizerExist.password
         );
         if (!isValid) {
            return res.status(404).send({ message: "Incorect Password" });
         }
         const payload = { id: isOrganizerExist.id };
         const token = jwt.sign(payload, "MINIPROJECT_DATABASE", {
            expiresIn: "10h",
         });
         res.status(200).send({
            message: "Login Success",
            result: isOrganizerExist,
            token,
         });
      } catch (error) {
         res.status(400).send({ message: error.message });
      }
   },
   keepLogin: async (req, res) => {
      try {
         const result = await Organizer.findOne({
            where: {
               id: req.organizer.id,
            },
         });
         res.status(200).send({ result });
      } catch (error) {
         res.status(400).send({ message: error.message });
      }
   },
};
