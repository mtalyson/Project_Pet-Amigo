const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const {usuarios,enderecos} = require("../app/models")
const {autenticado} = require('../src/autenticado');
const multer = require('multer');
const uploadConfig = require('../config/uploadUsuarios');
const upload = multer(uploadConfig);

router.get("/", autenticado,async (req,res)=>{
    let buscarUser = await enderecos.findOne({
        include:[{association:'usuarios'}],
        where:{idUsuario:req.user.id}
    });
    res.render("conta", {usuarios:buscarUser});
})

router.get("/editconta/:id",autenticado, async (req,res)=>{
    let buscarUser = await enderecos.findOne({
        include:[{association:'usuarios'}],
        where:{idUsuario:req.params.id}
    });
    res.render("editarConta", {usuarios:buscarUser});
})

router.post("/atualizaconta",autenticado,upload.single('fotoUsuario'),usersControllers.update);

router.post('/users',autenticado,usersControllers.store);

module.exports = router;