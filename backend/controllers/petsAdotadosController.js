const {petsadotados} = require("../app/models");
const Op = require("sequelize").Op;
const {pets} = require("../app/models")

module.exports = {

    async show(req, res){
        let pet = await petsadotados.findAll({
            include:[{association:'pets'}],
            where: {[Op.and]:{idUsuario:req.user.id, statusValido:0}}
        })

        res.render("petsAdotados", {pets:pet})
    },

    async update(req, res){

        let atualizaValido = await petsadotados.destroy ({
            where: {[Op.and]:{idUsuario:req.user.id, idPet:req.query.idpet}}
        })

        let atualizaStatus = await pets.update({
            statusAdocao: 0,
        }, {
            where: {id:req.query.idpet}
        })

        res.redirect("/?pag=0&tipo=0");

    } 
}