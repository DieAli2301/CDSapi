// constante del modelo de datos
const Users = require("../model/registro");
const jwt = require("jsonwebtoken");  


// Obtener todos los objetos
const getUsers = async (req, res) => {
  jwt.verify(req.token,'curadellaseguridad', (error, authData) =>{ 
    Users.find((err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });
};

// Crear un objeto con el formato indicado
const createUser = async (req, res) => {
  const user = new Users({
    apellido: req.body.apellido,
    nombre: req.body.nombre,
    username: req.body.username,
    correo: req.body.correo,
    password: req.body.password,
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
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin,
      },
    },
    { new: false },
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

//Login
const validacionUser = async (req, res) => {
  try {
    let username = req.params.userNOMBREDEUSUARIO
    let password = req.params.userPASSWORD
    let datos = []
    const user = await Users.findOne({username: req.params.userNOMBREDEUSUARIO}).exec()
    let test = user;
    jwt.sign({user: user}, "curadellaseguridad", (err, token) => {

    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" })
    } else{
      if(test.admin){
    if (username === user.username) {
      console.log("paso if user")
      if(password === user.password){
        console.log('paso if passw')
        datos.push(test._id, test.username, test.admin)
        console.log(username, password, datos)
        return res.status(200).json({ datos, token })
      } else {
        return res.status(400).send({ message: "Contraseña incorrecta" + JSON.stringify(user)})
      }
    } else {
      return res.status(400).send({ message: "Nombre de usuario incorrecto" })
    }
  }else{
    if (username === user.username) {
      console.log("paso if user")
      if(password === user.password){
        console.log('paso if passw')
        datos.push(user._id, user.username, false)
        console.log(username, password, datos)
        return res.status(200).json({ datos, token })
      } else {
        return res.status(400).send({ message: "Contraseña incorrecta" + JSON.stringify(user)})
      }
    } else {
      return res.status(400).send({ message: "Nombre de usuario incorrecto" })
    }
  }
  }
});
  } catch (error) {
    console.error(error)
    return res.status(500).send({ error: "Error en el servidor" })
  }

};

// 
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  validacionUser,
};
