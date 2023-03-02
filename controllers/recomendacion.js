
const Recomendaciones = require("../model/recomendacion");


const getRecomendacion = async (req, res) => {
  Recomendaciones.find((err, recomendacion) => {
    if (err) {
      res.send(err);
    }
    res.json(recomendacion);
  });
};


const createRecomendacion = async (req, res) => {
  const recomendacion = new Recomendaciones({
    nombre: req.body.nombre,
    tipo: req.body.tipo,
  });

  recomendacion.save( async (err, recomendacion) => {
    if (err) {
      res.send(err);
    }
    res.json(recomendacion);
  });
};


const updateRecomendacion = async (req, res) => {
  Recomendaciones.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
      },
    },
    { new: true },
    (err, Recomendaciones) => {
      if (err) {
        res.send(err);
      } else res.json(Recomendaciones);
    }
  );
};


const deleteRecomendacion = async (req, res) => {
  Recomendaciones.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};


module.exports = {
  getRecomendacion,
  createRecomendacion,
  updateRecomendacion,
  deleteRecomendacion,
};
