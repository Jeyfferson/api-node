const express = require('express');
const router = express.Router();

//LISTA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Lista todos os produtos'
    })
})

//Insere um produto
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Insere um Produto',
        produtoCriado: produto
    });
});

//Lista um produto especifico
router.get('/:id_product',(req, res, next) => {
    const id = req.params.id_produto;

    if (id==='especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id,
        });
    }else{
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }    

    res.status(200).send({
        mensagem: 'Usando o GET de um produto especifico',
        id: id
    });
});


router.put('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando PUT na rota produtos'
    })
})

//Altera um produto
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando patch na rota produtos'
    })
})

//Deleta um produto
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto deletado'
    })
})

module.exports = router