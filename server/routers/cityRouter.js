const { cityController } = require("../controllers");

const router = require("express").Router();

router.get("/", cityController.getCity);
router.post("/", cityController.addCountry);

module.exports = router;
