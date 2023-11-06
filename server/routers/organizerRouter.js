const router = require("express").Router();
const { organizerController } = require("../controllers");
const { verifyToken } = require("../middleware/organizerAuth");

router.post("/", organizerController.register);
router.get("/login", organizerController.login);
router.get("/", organizerController.getAll);
router.get("/keep-login", verifyToken, organizerController.keepLogin);
module.exports = router;
