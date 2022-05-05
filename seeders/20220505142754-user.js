'use strict'

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.bulkInsert("Users", [
      {
        name: 'Admin',
        coins: 0,
        image: 'https://www.pngmart.com/files/21/Admin-Profile-PNG.png',
        password: '1234567',
        email: 'admin@voll.com'
      },
      { 
        name: 'User',
        coins: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png',
        password: '1234567',
        email: 'user@voll.com'
      },
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Users", null, {})
  }
}