const { Users } = require("../models");

async function getLogin(email) {
  const allUsers = await Users.findOne({ where: { email } });
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
};
