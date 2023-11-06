const multer = require("multer");

module.exports = {
   multerUpload: () => {
      const storage = multer.diskStorage({
         destination: (req, file, cb) => {
            cb(null, "./public");
         },
         filename: (req, file, cb) => {
            cb(
               null,
               "EVIMG" +
                  "-" +
                  Date.now() +
                  Math.round(Math.random() * 1000000000) +
                  "." +
                  file.mimetype.split("/")[1]
            );
         },
      });
      const fileFilter = (req, file, cb) => {
         const extFilter = ["jpg", "png", "jpeg", "webp"];
         const checkExtension = extFilter.includes(
            file.mimetype.split("/")[1].toLowerCase()
         );
         checkExtension
            ? cb(null, true)
            : cb(new Error("file format not matches"));
      };
      return multer({ storage, fileFilter });
   },
};
