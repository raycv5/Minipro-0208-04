const router = require("express").Router();
const { transactionController } = require("../controllers");

router.post("/", transactionController.buy);
router.post("/check", transactionController.checkPromotion);

module.exports = router;
