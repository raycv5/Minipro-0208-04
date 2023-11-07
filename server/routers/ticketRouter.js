const router = require("express").Router();
const { ticketController } = require("../controllers");

router.get("/:id", ticketController.getAll);

module.exports = router;
