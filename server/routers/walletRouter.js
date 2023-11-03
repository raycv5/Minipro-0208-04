const router = require("express").Router();
const { walletController } = require("../controllers");

router.post("/", walletController.topUp);

module.exports = router;
