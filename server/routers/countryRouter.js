const router = require("express").Router();
const { countryController } = require("../controllers");

router.get("/", countryController.getAll);
router.post("/", countryController.add);

module.exports = router;
