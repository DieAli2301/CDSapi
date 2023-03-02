const router = require("express").Router();

// Login
const {
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser,
} = require("./controllers/login");


router.get("/users", getUsers);

router.post("/users", createUser);

router.put("/users/:todoID", updateUser);

router.delete("/users/:todoID", deleteUser);

//Productos
const {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} = require("./controllers/producto");


router.get("/productos", getProductos);

router.post("/productos", createProducto);

router.put("/productos/:todoID", updateProducto);

router.delete("/productos/:todoID", deleteProducto);

//Recomendaciones
const {
  getRecomendacion,
  createRecomendacion,
  updateRecomendacion,
  deleteRecomendacion,
} = require("./controllers/recomendacion");


router.get("/recomendacion", getRecomendacion);

router.post("/recomendacion", createRecomendacion);

router.put("/recomendacion/:todoID", updateRecomendacion);

router.delete("/recomendacion/:todoID", deleteRecomendacion);

//Rutinas
const {
  getRutinas,
  createRutina,
  updateRutina,
  deleteRutina,
} = require("./controllers/rutina");


router.get("/rutina", getRutinas);

router.post("/rutina", createRutina);

router.put("/rutina/:todoID", updateRutina);

router.delete("/rutina/:todoID", deleteRutina);

module.exports = router;



