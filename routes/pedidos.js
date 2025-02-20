const express = require('express');
const router = express.Router();

//LISTA TODOS OS pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Lista todos os pedidos'
    })
})

//Insere um pedido
router.post('/', (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Insere um pedido',
        pedidoCriado: pedido
    });
});

//Lista um pedido especifico
router.get('/:id_pedido',(req, res, next) => {
    const id = req.params.id_pedido;

    if (id==='especial') {
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id_pedido: id,
        });
    }
});



//Deleta um pedido
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido excluído'
    })
})

module.exports = router