const validateAdm = (req, res, next) => {
    const { nome, email, senha } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(500).json({
            msg: "Valide seus dados"
        })
    }

    if (!email || typeof email !== 'string') {
        return res.status(500).json({
            msg: "Valide seus dados"
        })
    }

    if (!senha || typeof senha !== 'string') {
        return res.status(500).json({
            msg: "Valide seus dados"
        })
    }

    return next();
}

const validateId = (req, res, next) => {
    const { id } = req.params

    if (!id || typeof id !== 'string') {
        return res.status(500).json({
            msg: "Valide seus dados"
        })
    }

    return next();
}


module.exports = { validateAdm, validateId };
