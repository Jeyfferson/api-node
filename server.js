import express from 'express';

const app = express();

const users = []

app.post('/users', (req, res) => {

    console.log(req)

    res.send('OK post ok')

})

app.get('/users', (req, res) => {

    res.send('Olá Dev');

})

app.listen(3000)