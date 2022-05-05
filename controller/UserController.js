const UserService = require("../services/UserService");

async function getLogin(req, res) {
  try {
    const { email } = req.body;
    const login = await UserService.getLogin(email);
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
};
