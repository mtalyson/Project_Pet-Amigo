const express = require('express');
const router = express.Router();
const petsdoadosController = require("../controllers/petsdoadosController")
const {autenticado} = require('../src/autenticado');

router.get("/", autenticado, petsdoadosController.show)

module.exports = router;