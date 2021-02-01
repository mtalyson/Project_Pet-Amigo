const { pets } = require("../app/models/")
const { petsadotados } = require("../app/models/")
const Op = require("sequelize").Op

module.exports = {

    async show(req, res) {

        let pet = await pets.findAll({
            where: { [Op.and]: { idUsuarioDoacao: req.user.id } }
        });

        //Saber quem adotou o pet
        let petadotado = await petsadotados.findAll({
            include: [{ association: 'usuarios' }, { association: 'pets' }],
            where: {[Op.and]: {idUsuarioDoador:req.user.id, statusValido: 0 }}
        })

        console.log(petadotado)

        res.render("petsdoados", { pets:pet, petsadotados:petadotado  });
    },
}