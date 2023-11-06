const router = require("express").Router();
const { userController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.get("/", userController.getAll);
router.get("/keep-login", verifyToken, userController.keepLogin);
router.post("/", userController.register);
router.post("/login", userController.login);

module.exports = router;
