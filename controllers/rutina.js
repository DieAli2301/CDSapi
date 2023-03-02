const Rutinas = require("../model/rutina");

const getRutinas = async (req, res) => {
  Rutinas.find((err, rutinas) => {
    if (err) {
      res.send(err);
    }
    res.json(rutinas);
  });
};

const createRutina = async (req, res) => {
  const rutina = new Rutinas({
    nombre: req.body.nombre,
    rutina: req.body.rutina,
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
        rutina: req.body.rutina,
      },
    },
    { new: true },
    (err, Rutinas) => {
      if (err) {
        res.send(err);
      } else res.json(Rutinas);
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
