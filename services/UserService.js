const { Users } = require("../models");

async function getLogin(body) {
  const { email, password } = body;
  const allUsers = await Users.findOne({ where: { email, password } });
  return allUsers;
}

async function getOne(body) {
  const { email } = body;
  const allUsers = await Users.findOne({ where: { email } });
  if (!allUsers) return null;
  return allUsers;
}

async function updateLogin(body) {
  const { email, coins } = body;
  const allUsers = await Users.findOne({ where: { email }})
  const updatedUser = await allUsers.update({ coins });
  return updatedUser;
}

module.exports = {
  getLogin,
  updateLogin,
  getOne,
};
