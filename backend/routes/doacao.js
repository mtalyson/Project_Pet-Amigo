const express = require('express');
const router = express.Router();
const petsControllers = require('../../backend/controllers/petsControllers');
const multer = require('multer');
const uploadConfig = require('../../config/upload');
const upload = multer(uploadConfig);
const {autenticado} = require('../../auth/autenticado');
const {pets} = require("../../backend/app/models");
const {categorias} = require("../../backend/app/models");

router.get("/", autenticado, async (req,res)=>{
    let categoria = await categorias.findAll();
    res.render("doacao",{categorias:categoria})
})

router.get("/editpet/:id",autenticado, async (req,res)=>{
    let buscarPet = await pets.findByPk(req.params.id);
    res.render("editarPetsDoados", {pet:buscarPet});
})

router.post("/atualizapet",autenticado,upload.single('fotoPet'),petsControllers.update);

router.delete("/excluipet/:id",autenticado, petsControllers.delete);

router.post('/pets',autenticado,upload.single('fotoPet'), petsControllers.store);

module.exports = router;