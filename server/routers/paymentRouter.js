const router = require("express").Router();
const { paymentController } = require("../controllers");

router.post("/", paymentController.add);

module.exports = router;
