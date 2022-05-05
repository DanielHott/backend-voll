const { Users } = require("../models");

async function getLogin(email) {
  const allUsers = await Users.findOne({ where: { email } });
  return allUsers;
}

module.exports = {
  getLogin,
};
