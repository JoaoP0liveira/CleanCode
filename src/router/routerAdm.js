const { Router } = require('express');
const router = Router();
const admController = require('../controller/admController');
const { validateAdm, validateId } = require('../middlewares/validateAdm');
const { validateUserId } = require('../middlewares/validateUser');

// Login
router.post("/login", admController.login);


// Criar adm
router.post("/", validateAdm, admController.create);

// GetAll
router.get("/", admController.getAll);


// GetOne
router.get("/:id", validateId, admController.getOne);


// Update
router.put("/:id", validateId, admController.update);


// Delete
router.delete("/:id", validateId, admController.delete);


module.exports = router;