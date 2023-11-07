const { countryController } = require("../controllers");
const router = require("express").Router();

router.get("/", countryController.getAll);
router.post("/", countryController.add);

module.exports = router;
