const { Router } = require("express");

const {
  Producto,
  Categoria,
  Usuario,
  Rating,
  Pedido,
  Compra,
} = require("../db");
const productosDB = require("../utils/products.json");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/countries', countries)

//!GET Productos con modelo categoría incluido
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [{ model: Categoria }],
    });

    if (productos.length === 0) {
      const productoJSON = await Producto.bulkCreate(productosDB);
      res.send(productoJSON);
    } else {
      res.status(200).json({ productos });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
