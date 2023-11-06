const nodemailer = require("nodemailer");

const organizerTransporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "",
      pass: "",
   },
   tls: {
      rejectUnauthorized: false,
   },
});

module.exports = organizerTransporter;
