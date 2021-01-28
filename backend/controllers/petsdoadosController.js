const {pets} = require("../app/models");
const Op = require("sequelize").Op;

module.exports = {

    async show(req, res){
        
        let pet = await pets.findAll({
            where: {[Op.and]:{idUsuarioDoacao:req.user.id, petExcluido:0}}
        })

        res.render("petsdoados", {pets:pet})
    },

    
}