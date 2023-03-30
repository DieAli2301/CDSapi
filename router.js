const router = require("express").Router();
const verifyToken = require("./function");
const rateLimit = require("express-rate-limit");


const accountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 100, 
  message: "intentelo de nuevo dentro de una hora"
});

const productoLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 1000, 
  message: "intentelo de nuevo dentro de una hora"
});

// Register
const {
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  validacionUser,
} = require("./controllers/registro");


router.get("/users", verifyToken, accountLimiter,getUsers);

router.post("/users", verifyToken,createUser);

router.put("/users/:todoID", updateUser);

router.delete("/users/:todoID", deleteUser);

router.get("/users/:userNOMBREDEUSUARIO/:userPASSWORD", accountLimiter,validacionUser)

//Productos
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("./controllers/producto");


router.get("/productos", verifyToken, getProductos);

router.post("/productos", productoLimiter, verifyToken, createProducto);

router.put("/productos/:todoID", updateProducto);

router.delete("/productos/:todoID", deleteProducto);


//Recomendaciones
const {
  getRutinas,
  createRutina,
  updateRutina,
  deleteRutina,
} = require("./controllers/rutinas");


router.get("/rutinas", verifyToken,getRutinas);

router.post("/rutinas", verifyToken,createRutina);

router.put("/rutina/:todoID", updateRutina);

router.delete("/rutina/:todoID", deleteRutina);

const {
  getFavoritos,
  createFavoritos,
  updateFavoritos,
  deleteFavoritos,
} = require("./controllers/favoritos")

router.get("/favoritos", verifyToken,getFavoritos);

router.post("/favoritos", verifyToken,createFavoritos);

router.put("/favoritos/:todoID", updateFavoritos);

router.delete("/favoritos/:todoID", deleteFavoritos);

module.exports = router;



