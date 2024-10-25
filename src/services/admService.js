const Adm = require("../models/admin");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const admService = {
    create: async (req) => {
        try {

            const hashSenha = await bcrypt.hash(req.senha, 10);
            const existeEmail = await Adm.findOne({ where: { email: req.email } })
            if (existeEmail) {
                return null
            }
            const newData = {
                nome: req.nome,
                email: req.email,
                senha: hashSenha
            }

            return await Adm.create(newData);
        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    },
    getAll: async () => {
        try {
            return await Adm.findAll();
        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    },
    getOne: async (id) => {
        try {
            const adm = await Adm.findByPk(id);

            if (!adm) {
                return null
            }

            return adm

        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    },
    update: async (id, data) => {
        try {

            const adm = await Adm.findByPk(id);

            if (!adm) {
                return null
            }

            return await adm.update(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    },
    delete: async (id) => {
        try {
            const adm = await Adm.findByPk(id);

            if (!adm) {
                return null
            }

            return await adm.destroy();
        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    },
    login: async (data) => {
        try {

            const adm = await Adm.findOne({
                where: {
                    email: data.email,
                }
            })

            if (!adm) {
                return null
            }

            const isValida = await bcrypt.compare(data.senha, adm.senha);

            if (!isValida) {
                return null
            }

            const token = await jwt.sign({
                email: data.email,
                id: adm.id
            }, process.env.SECRET, { expiresIn: '1h' })

            return token

        } catch (error) {
            console.error(error);
            throw new Error("Erro contate o suporte");
        }
    }
}


module.exports = admService