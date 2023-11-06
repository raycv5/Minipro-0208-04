const router = require("express").Router();
const { cityController } = require("../controllers");

router.get("/", cityController.getAll);
router.post("/", cityController.add);


module.exports = router;
