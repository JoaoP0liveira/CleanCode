require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./router/router')

const app = express();

app.use(express.json());





app.use('/api', routes)

sequelize.authenticate()
    .then(() => {
        console.log("Conexao com banco de dados deu certo");
        sequelize.sync();
    })
    .catch(err => {
        console.error("Erro ao se conectar com banco de dados", err)
    })

const PORT = process.env.PORT || 3000;
// listen -> ouvir
// ouvindo na possivel ou na porta 3000
app.listen(PORT, () => {
    console.log('----------------------')
    console.log(`Running on http://${PORT}`);
    console.log('----------------------')
})