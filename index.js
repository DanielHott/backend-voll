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

app.post('/login', UserController.getLogin);

app.patch('/login', UserController.updateLogin);

app.post('/user', UserController.getOne);

app.get('/products', ProductController.getProducts);

app.post('/products', ProductController.createProducts);

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})