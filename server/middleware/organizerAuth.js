const jwt = require("jsonwebtoken");

module.exports = {
   verifyToken: (req, res, next) => {
      try {
         let organizerToken = req.headers.authorization;
         if (!organizerToken) {
            return res.status(403).send({ message: "Token empty" });
         }
         organizerToken = organizerToken.split(" ")[1];
         let verifyOrganizer = jwt.verify(
            organizerToken,
            "TOKEN_ORGANIZER"
         );
         req.organizer = verifyOrganizer;
         next();
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
};
