const router = require("express").Router();
const { topupController } = require("../controllers");

router.get("/", topupController.getPending);
router.post("/", topupController.topupRequest);
router.patch("/", topupController.handleRequest);
router.get("/:id", topupController.getAll);

module.exports = router;
