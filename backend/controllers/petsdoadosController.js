const {pets, sequelize} = require("../app/models/");
const {usuarios} = require("../app/models/")
const {petsadotados} = require("../app/models/")
const Op = require("sequelize").Op;

module.exports = {

    async show(req, res){
        
        let pet = await pets.findAll({
            where: {[Op.and]:{idUsuarioDoacao:req.user.id, petExcluido:0}}
        });

        let petusuario = await pets.findAll({
            where:  {[Op.and]:{idUsuarioDoacao:req.user.id, statusAdocao:1}}
        });

        let petadotado = await petsadotados.findAll({
            where: {id:petusuario}
        })

        res.render("petsdoados", {pets:pet, pets:petusuario, petsadotados:petadotado});
    },

    
}