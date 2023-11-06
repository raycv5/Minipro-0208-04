const jwt = require("jsonwebtoken");

module.exports = {
   verifyToken: (req, res, next) => {
      try {
         let token = req.headers.authorization;
         if (!token) {
            return res.status(403).send({ message: "Token empty" });
         }
         token = token.split(" ")[1];
         let verifyOrganizer = jwt.verify(token, "MINIPROJECT_DATABASE");
         req.organizer = verifyOrganizer;
         next();
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
};
