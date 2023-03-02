// constante del modelo de datos
const Users = require("../model/login");

// Obtener todos los objetos
const getUsers = async (req, res) => {
  Users.find((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

// Crear un objeto con el formato indicado
const createUser = async (req, res) => {
  const user = new Users({
    apellido: req.body.apellido,
    nombre: req.body.nombre,
    edad: req.body.edad,
    username: req.body.username,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
    fecha_nacimiento: req.body.fecha_nacimiento,
    sexo: req.body.sexo,
  });

  user.save( async (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

// actualizar un elemento a partir del _id
const updateUser = async (req, res) => {
  Users.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        nombre: req.body.nombre,
        edad: req.body.edad,
        username: req.body.username,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        fecha_nacimiento: req.body.fecha_nacimiento,
        sexo: req.body.sexo,
      },
    },
    { new: true },
    (err, Users) => {
      if (err) {
        res.send(err);
      } else res.json(Users);
    }
  );
};

// borrar un elemento a través del _id
const deleteUser = async (req, res) => {
  Users.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

// 
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
