const express = require('express');
const router = express.Router();
const petsdoadosController = require("../../backend/controllers/petsdoadosController")
const {autenticado} = require('../../auth/autenticado');

router.get("/", autenticado, petsdoadosController.show)

module.exports = router;