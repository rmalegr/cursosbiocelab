const { Router } = require("express");

const { premiumController } = require("../controllers/mercadoPago.controller");

const router = Router();

router.post("/", premiumController);

module.exports = router;
