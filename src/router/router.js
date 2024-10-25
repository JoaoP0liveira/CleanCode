const { Router } = require("express");
const router = Router();
const routerUser = require('./routerUser');
const routerAdm = require('./routerAdm');

router.use('/user', routerUser);
router.use("/adm", routerAdm);

module.exports = router;