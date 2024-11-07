const { Router } = require('express');
const { findAllClienteController, findByIdClienteController, createClienteController, updateClienteController, deleteByIdClienteController } = require('../controllers/cliente');
const { validatorToken } = require('../middlewares/validator-jwt');
const { esAdmin, esUser, esDeveloper } = require('../middlewares/validator-roles');

const router = Router();

router.get('',[validatorToken], findAllClienteController); // validar que este autenticado

router.get('/:id', [validatorToken, esUser], findByIdClienteController); // validar que este autenticado, que sea user

router.post('', [validatorToken, esDeveloper], createClienteController); // validar que este autenticado, que sea developer

router.put('',[validatorToken,esAdmin], updateClienteController); // validar que este autenticado, que sea admin

router.delete('/:id', [validatorToken,esAdmin] ,deleteByIdClienteController);

module.exports = router;