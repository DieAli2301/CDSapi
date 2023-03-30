const Favoritos = require("../model/favoritos");

const getFavoritos = async (req, res) => {
  Favoritos.find((err, favorito) => {
    if (err) {
      res.send(err);
    }
    res.json(favorito);
  });
};


const createFavoritos = async (req, res) => {
  const favorito = new Favoritos({
    nombre: req.body.nombre,
    precio: req.body.precio,
    imagen: req.body.imagen,
  });

  favorito.save( async (err, favorito) => {
    if (err) {
      res.send(err);
    }
    res.json(favorito);
  });
};


const updateFavoritos = async (req, res) => {
  Favoritos.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen,
      },
    },
    { new: true },
    (err, Favoritos) => {
      if (err) {
        res.send(err);
      } else res.json(Favoritos);
    }
  );
};


const deleteFavoritos = async (req, res) => {
  Favoritos.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};


module.exports = {
  getFavoritos,
  createFavoritos,
  updateFavoritos,
  deleteFavoritos
};