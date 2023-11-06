const router = require("express").Router();
const { pointController } = require("../controllers");

router.get("/", pointController.getAll);
router.post("/", pointController.add);

module.exports = router;
