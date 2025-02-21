const express = require('express');
const app = express();
const morgan= require('morgan');  
const bodyParser = require('body-parser'); 

const routerProdutos = require('./routes/produtos');
const routerPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false})); //Apenas dados simples
app.use(bodyParser.json()); // json de entradas do body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Permissão de controle de origem - * todos
    res.header(
        'Access-Control-Allow-Header',
        'Content-Type',
        'Origin',
        'X-Requested-With',
        'Accept',
        'Authorization'
    ); //Autorizando apenas os especificados

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }

    next();
})

app.use('/produtos', routerProdutos);
app.use('/pedidos', routerPedidos);

app.use((req, res, next) => {
    const erro= new Error('Não encontrado');
    erro.status = 404;
    next(erro); 
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;