const db = require("../models");
const Category = db.Category;

module.exports = {

   getCategory: async (req, res) => {
      try {
         const category = await Category.findAll();
         res.status(200).send(category );
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   addCategory: async (req, res) => {
      try {
         await Category.create(req.body);
         res.status(200).send("Category added successfully");
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },

};
