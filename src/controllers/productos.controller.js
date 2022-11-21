const { Producto, Categoria } = require("../db");
const productosDB = require("../utils/products.json");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/countries', countries)

//!GET Productos con modelo categoría incluido
const getAllProducts = async (req, res) => {
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
};

/* export const f = {};
  RUTA DE PAGO MERCADO pAGO 
 */

module.exports = {
  getAllProducts,
};
