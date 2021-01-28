const express = require('express');
const router = express.Router();
const adocaoControllers = require('../../backend/controllers/adocaoControllers');
const {autenticado} = require('../../auth/autenticado');

router.get("/",autenticado,adocaoControllers.show);
router.get("/adota",autenticado,adocaoControllers.store);

module.exports = router;