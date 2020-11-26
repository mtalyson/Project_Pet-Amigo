const express = require('express');
const router = express.Router();
const petsAdotadosController = require("../controllers/petsAdotadosController")
const {autenticado} = require('../src/autenticado');

router.get("/", autenticado, petsAdotadosController.show);


router.get("/cancelaadocao", autenticado, petsAdotadosController.update);

router.get("/editpet/:id",(req,res)=>{
    res.render("doacao")
})

module.exports = router;