const router = require("express").Router();
const { eventController } = require("../controllers");
const { multerUpload } = require("../middleware/multer");
const { verifyToken } = require("../middleware/organizerAuth");

router.get("/", eventController.getEvent);
router.post("/", multerUpload().single("file"), eventController.registEvent);

module.exports = router;
