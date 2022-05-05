const express = require('express');
const cors = require('cors');

const app = express();

const UserController = require('./controller/UserController');

const ProductController = require('./controller/ProductController');

app.use(express.json());

const PORT =  3010;

 app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
}) 

app.get('/login', UserController.getLogin);

app.get('/products', ProductController.getProducts);

app.post('/products', ProductController.createProducts);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})