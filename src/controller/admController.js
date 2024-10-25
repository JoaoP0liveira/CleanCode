const admService = require("../services/admService");

const admController = {
    create: async (req, res) => {
        try {

            const data = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }

            const adm = await admService.create(data);


            if (!adm) {
                return res.status(400).json({
                    msg: "ja existe esse email"
                })
            }
            return res.status(200).json({
                msg: "Adm criado com sucesso",
                adm
            })



        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    },
    getAll: async (req, res) => {
        try {

            const adm = await admService.getAll();

            return res.status(200).json({
                msg: "Todos os adm",
                adm
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    },
    getOne: async (req, res) => {
        try {

            const { id } = req.params

            const adm = await admService.getOne(id);

            if (!adm) {
                res.status(404).json({
                    msg: "ADM nao encontrado"
                })
            }

            return res.status(200).json({
                msg: "adm encontrado",
                adm
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    },
    update: async (req, res) => {
        try {

            const data = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }

            const { id } = req.params

            const adm = await admService.update(id, data);

            if (!adm) {
                res.status(404).json({
                    msg: "ADM nao encontrado"
                })
            }

            return res.status(200).json({
                msg: "adm atualizado",
                adm
            })


        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    },
    delete: async (req, res) => {
        try {

            const { id } = req.params

            const adm = await admService.delete(id);

            if (!adm) {
                res.status(404).json({
                    msg: "ADM nao encontrado"
                })
            }

            return res.status(200).json({
                msg: "adm deletado",
                adm
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    },
    login: async (req, res) => {
        try {

            const data = {
                email: req.body.email,
                senha: req.body.senha
            }

            const adm = await admService.login(data);

            if (!adm) {
                return res.status(404).json({
                    msg: "login nao efetuado"
                })
            }



            return res.status(200).json({
                msg: "login efetuado com sucesso",
                adm
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: "Erro, contate o suporte"
            })
        }
    }
}

module.exports = admController