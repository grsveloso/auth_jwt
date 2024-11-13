require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const User = require('./models/User');

app.get('/', (req, res) => {
    res.status(200).json({success: 'Olá! Testando resposta da requisição do projeto de autenticação com Node.js e MongoDB com JWT.'})
});

app.post('/auth/register', async (req, res) => {

    const {name, email, password, confirmpassword} = req.body;

    if (!name) {
        return res.status(422).json({errorMessage: "O nome é obrigatório."});
    }

    if (!email) {
        return res.status(422).json({errorMessage: "O email é obrigatório."});
    }

    if (!password) {
        return res.status(422).json({errorMessage: "A senha é obrigatória."});
    }
});

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.qis51.mongodb.net/`)
    .then(() => {
        app.listen(3000);
        console.log('Conectado ao banco de dados');
    })
    .catch((err) => console.log(err));
