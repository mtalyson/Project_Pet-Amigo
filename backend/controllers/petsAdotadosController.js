const {petsadotados} = require("../app/models");
const {usuarios} = require("../app/models");
const Op = require("sequelize").Op;
const {pets} = require("../app/models")

var Handlebars = require('handlebars');

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = {

    async show(req, res){
        let pet = await petsadotados.findAll({
            include:[{association:'pets'}, { association: 'usuarios' }],
            where: {[Op.and]:{idUsuario:req.user.id}}
        })

        let usuario = await usuarios.findAll()

        console.log(usuario)

        res.render("petsAdotados", {pets:pet, usuarios:usuario})
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