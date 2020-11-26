const express = require('express');
const router = express.Router();
const adocaoControllers = require('../controllers/adocaoControllers');
const {autenticado} = require('../src/autenticado');

router.get("/",autenticado,adocaoControllers.show);
router.get("/adota",autenticado,adocaoControllers.store);

module.exports = router;