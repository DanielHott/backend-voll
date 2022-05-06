const UserService = require("../services/UserService");

async function getLogin(req, res) {
  try {
    const login = await UserService.getLogin(req.body);
    if (login === null) return res.status(400).json({ message: 'Email ou senha inválidos!' });
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function getOne(req, res) {
  try {
    const login = await UserService.getOne(req.body);
    if (!login) return res.status(400).json({ message: 'Usuário não encontrado!' });
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}


async function updateLogin(req, res) {
  try {
    const login = await UserService.updateLogin(req.body);
    return res.status(200).json(login);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

module.exports = {
  getLogin,
  updateLogin,
  getOne,
};
