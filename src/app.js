'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com o MongoDB efetuada com sucesso!');
}).catch((err) => {
  console.log('Erro ao se conectar com o BD: ' + err);
});

//Carrega as Models
const Product = require('./models/Product');
const Customer = require('./models/Customer');
const Order = require('./models/Order');

//Carrega as Rotas
const indexRoute = require('./routes/index-route'); 
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route'); 
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;
