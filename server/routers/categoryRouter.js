const router = require("express").Router();
const { categoryController } = require("../controllers");

router.get("/", categoryController.getAll);
router.post("/", categoryController.add);

module.exports = router;
