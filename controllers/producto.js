const Producto = require("../model/producto");

const getProductos = async (req, res) => {
    Producto.find((err, productos) => {
      if (err) {
        res.send(err);
      }
      res.json(productos);
    });
};

const createProducto = async (req, res) => {
  const producto = new Producto({
    nombre: req.body.nombre,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
    precio: req.body.precio,
    cantidad: req.body.cantidad,
  });

  producto.save( async (err, producto) => {
    if (err) {
      res.send(err);
    }
    res.json(producto);
  });
};

const updateProducto = async (req, res) => {
  Producto.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        imagen: req.body.imagen,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
      },
    },
    { new: true },
    (err, Producto) => {
      if (err) {
        res.send(err);
      } else res.json(Producto);
    }
  );
};


const deleteProducto = async (req, res) => {
  Producto.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

 
module.exports = {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
};