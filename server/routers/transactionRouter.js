const router = require("express").Router();
const { transactionController } = require("../controllers");

router.post("/", transactionController.buy);
router.post("/check", transactionController.checkPromotion);
router.get("/", transactionController.checkPromotion);

module.exports = router;
