const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).jason({ msg: `parametros inválidos` });
    }

    return next();
}

const validateUser = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        // 400 -> bad request 
        return res.status(400).jason({ msg: `campos inválidos` });
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).jason({ msg: `campos inválidos` });
    }

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({ msg: 'campos email invalido' });
    }

    next();
}



module.exports = { validateUser, validateUserId };