const Rutinas = require("../model/rutinas");
const jwt = require("jsonwebtoken");

const getRutinas = async (req, res) => {
  jwt.verify(req.token, 'curadellaseguridad', (err, authData) => {
    Rutinas.find((err, rutinas) => {
      if (err) {
        res.send(err);
      }
      res.json(rutinas);
    });
  });
};

const createRutina = async (req, res) => {
  const rutina = new Rutinas({
    nombre: req.body.nombre,
    categoria: req.body.categoria,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion,
  });

  rutina.save( async (err, rutina) => {
    if (err) {
      res.send(err);
    }
    res.json(rutina);
  });
};

const updateRutina = async (req, res) => {
  Rutinas.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
      },
    },
    { new: true },
    (err, Rutina) => {
      if (err) {
        res.send(err);
      } else res.json(Rutina);
    }
  );
};


const deleteRutina = async (req, res) => {
  Rutinas.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

 
module.exports = {
  getRutinas,
  createRutina,
  updateRutina,
  deleteRutina,
};