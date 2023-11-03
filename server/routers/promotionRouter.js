const router = require("express").Router();
const { promotionController } = require("../controllers");

router.post("/", promotionController.add);

module.exports = router;
