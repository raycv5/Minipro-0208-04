const router = require("express").Router();
const { pointController } = require("../controllers");

router.post("/", pointController.add);

module.exports = router;
