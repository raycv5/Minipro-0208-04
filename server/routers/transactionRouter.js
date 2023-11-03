const router = require("express").Router();
const { transactionController } = require("../controllers");

router.post("/", transactionController.buy);
router.get("/", transactionController.checkPromotion);

module.exports = router;
