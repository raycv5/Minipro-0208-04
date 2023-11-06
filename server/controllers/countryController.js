const db = require('../models')
const Country = db.Country;


module.exports = {
   getCountry: async (req, res) => {
      try {
         const result = await Country.findAll();
         res.status(200).send(result);
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   addCountry: async (req, res) => {
      try {
         await Country.create(req.body);
         res.status(200).send(`New country added`);
      } catch (err) {
         console.log(err);
         res.status(400).send({ message: err.message });
      }
   },
};
