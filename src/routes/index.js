const { Router } = require("express");

const router = Router();

const router_producto = require("./productos.routes");
const router_MercadoPago = require("./mercadoPago.routes");
//IMPORTAR TODOS LOS ROUTERS
router.get("/", router_producto);
router.post("/", router_MercadoPago);

module.exports = router;
