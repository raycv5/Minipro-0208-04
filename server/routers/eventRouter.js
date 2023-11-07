const router = require("express").Router();
const { eventController } = require("../controllers");
const { multerUpload } = require("../middleware/multer");
const { verifyToken } = require("../middleware/organizerAuth");

router.get("/", eventController.getEvent);
router.post("/", multerUpload().single("file"), eventController.registEvent);
router.get("/:id", eventController.getById);
router.get("/category/:id", eventController.getByCategory);
router.get("/country/:id", eventController.getByCountry);
router.get("/organizer/:id", eventController.getByOrganizerId);

module.exports = router;
