
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
        name: 'Forno Micro-ondas',
        description: '20L Branco Espelhado Midea 127V MRAM21',
        coins: 47,
        image: 'https://m.media-amazon.com/images/I/61FINj+3-1L._AC_SL1500_.jpg'
      },
      {
        name: 'Refrigerador',
        description: 'Frost Free com Painel de Controle Externo 371L - Branco',
        coins: 289,
        image: 'https://imgs.casasbahia.com.br/1743662/1xg.jpg'
      },
      {
        name: 'Cafeteira Expresso',
        description: 'Prima Latte II, Vermelho, 110v, Oster',
        coins: 97,
        image: 'https://m.media-amazon.com/images/I/61XxOI6uACL._AC_SL1000_.jpg'
      },
      {
        name: 'Fogão 5 Bocas',
        description: 'Electrolux Preto Automático com Mesa de Vidro e Tripla Chama (76SPV) Bivolt',
        coins: 210,
        image: 'https://m.media-amazon.com/images/I/51dpwiW0bNL._AC_SL1000_.jpg'
      },
      {
        name: 'Fritadeira Elétrica',
        description: 'Sem óleo AirFry Super Inox, Arno, IFRY, Preta e Inox',
        coins: 62,
        image: 'https://m.media-amazon.com/images/I/71iVW4nPUgL._AC_SL1500_.jpg'
      },
      {
        name: 'Ventilador',
        description: 'Maxi Power 30cm, 110V, Preto, 50W - NV-15-6P FB',
        coins: 15,
        image: 'https://m.media-amazon.com/images/I/91-2jkJ18IL._AC_SL1500_.jpg'
      },
      {
        name: 'Parafusadeira e furadeira',
        description: 'Bosch GSR 7-14 E 400W 127V com cabo de 4m',
        coins: 23,
        image: 'https://m.media-amazon.com/images/I/51tvhQUT10L._AC_SL1000_.jpg'
      },
      {
        name: 'Ar Condicionado',
        description: 'Split HW Agratto Eco Top 9.000 BTUs Só Frio 220V',
        coins: 110,
        image: 'https://m.media-amazon.com/images/I/514VeX40y0L._AC_SL1000_.jpg'
      },
      {
        name: 'Notebook',
        description: 'I5 8GB 512GB SSD 15.6 Windows 11 Cinza Chumbo',
        coins: 365,
        image: 'https://m.media-amazon.com/images/I/51tGxEwZ3nL._AC_SL1000_.jpg'
      },
      {
        name: 'Xbox Series S',
        description: 'Com um controlador sem fio, 16 GB de RAM GDDR6, 8 núcleos Zen 2 CPU',
        coins: 500,
        image: 'https://m.media-amazon.com/images/I/61iyoT2OltL._AC_SL1500_.jpg'
      },
      {
        name: 'Aspirador de Pó',
        description: '1600W Verde 110V A3',
        coins: 36,
        image: 'https://m.media-amazon.com/images/I/51dghflHIhL._AC_SL1000_.jpg'
      },
      {
        name: 'Secador',
        description: '2000w 127v Azul Tiffany, Taiff, STYLE 331, AZUL, Pequeno',
        coins: 30,
        image: 'https://m.media-amazon.com/images/I/618neoodK6L._AC_SL1500_.jpg'
      },
      {
        name: 'Forno Elétrico',
        description: '44L Decorato Gourmet Preto 220V ',
        coins: 117,
        image: 'https://m.media-amazon.com/images/I/617KnFd9j7L._AC_SL1000_.jpg'
      },
      {
        name: 'Lavadora de Alta Pressão',
        description: '1800W 2000 PSI/Libras 360L/h Bico Turbo Jato leque e Concentrado 220V',
        coins: 109,
        image: 'https://m.media-amazon.com/images/I/51gjMUVrCmL._AC_SL1000_.jpg'
      },
      
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Products", null, {})
  }
}
