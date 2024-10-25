const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");
//definindo modelo 
const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // email unico
    }
},{
    timestamps: true // timestamps, para armazenar a hora que foi criada
});

module.exports = User;
