
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.bulkInsert("Products", [
      {
        name: 'Smart TV 32',
        description: 'Full HD com Conversor Digital Wi-Fi Bluetooth 1 USB 2 HDMI Controle Remoto com Comando de Voz Google Assistant',
        coins: 130,
        image: 'https://imgs.casasbahia.com.br/55030361/1xg.jpg'
      },
      {
        name: 'Smartphone',
        description: '32GB, Câmera Traseira 8 MP, Tela Infinita de 6.5", Octa Core, 2GB RAM, e Android',
        coins: 80,
        image: 'https://imgs.casasbahia.com.br/55038996/1xg.jpg'
      },
      {
        name: 'Caixa de Som Portátil',
        description: ' Bluetooth e À Prova de Poeira e Água – Preto',
        coins: 22,
        image: 'https://m.media-amazon.com/images/I/71bsb-XWmaS._AC_SL1000_.jpg'
      },
      {
        name: 'Lavadora',
        description: 'Semiautomática Branca - 10kg',
        coins: 59,
        image: 'https://imgs.casasbahia.com.br/55010661/1xg.jpg'
      },
      {
        name: 'Refrigerador',
        description: ' Frost Free com Painel de Controle Externo 371L - Branco',
        coins: 289,
        image: 'https://imgs.casasbahia.com.br/1743662/1xg.jpg'
      },
      
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Products", null, {})
  }
}
