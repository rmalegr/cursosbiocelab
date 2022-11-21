const { Router } = require("express");

const { getAllProducts } = require("../controllers/productos.controller");

const router = Router();

router.get("/", getAllProducts);

module.exports = router;
