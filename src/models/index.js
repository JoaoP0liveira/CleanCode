const fs = require('fs'); // file system
const path = require('path'); // caminho
const sequelize = require('../config/database')

const db = [];

// dir -> lostar os arquivos do direteorio 
fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(file => {
        // capturando cada arquivo individualmente
        const model = require(path.join(__dirname, file));
        // db { user } = Modelo User;
        db[model.name] = model;
    });

sequelize.sync();

module.exports = { sequelize, ...db };