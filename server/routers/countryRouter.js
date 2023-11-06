const router = require("express").Router();
const { countryController } = require("../controllers");

router.get("/", countryController.getCountry);
router.post("/", countryController.addCountry);

module.exports = router;
