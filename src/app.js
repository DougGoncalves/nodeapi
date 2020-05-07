'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect("mongodb+srv://ndstr:maomao12@nodeapi-2tah0.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB feita com sucesso');
}).catch( (err)=>{
  console.log('Erro ao se conectar com o Mongo: ' + err);
});

//Carrega as Models
const Product = require('./models/Product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route'); 
const productRoute = require('./routes/product-route'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
