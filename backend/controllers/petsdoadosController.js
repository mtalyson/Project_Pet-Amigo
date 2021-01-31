const { pets } = require("../app/models/")
const { petsadotados } = require("../app/models/")
const { usuarios } = require("../app/models/")
const Op = require("sequelize").Op
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('database_pet_amigo', 'root', '', {
//     host: '127.0.0.1',
//     dialect: 'mysql',

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });

module.exports = {

    async show(req, res) {

        let pet = await pets.findAll({
            where: { [Op.and]: { idUsuarioDoacao: req.user.id, petExcluido: 0 } }
        });

        //Verificando se Existem pets Doados pelo Usuario
        function id(){
            if (typeof pet !== [] && pet.length > 0) {
                return pet.map(element => {
                    return element.get('id');
                });
            }else{
                return 0;
            }
        }

        //console.log(id());
        
        const map = pet;
        const iterator = pet.values();

        //console.log(iterator1.next().value.get('id'));
        //console.log(iterator1.next().value);

        //Saber quem adotou o pet
        let petadotado = await petsadotados.findAll({
            include: [{ association: 'usuarios' }, { association: 'pets' }],
            where: {[Op.and]: {statusValido: 0 }}
        })

        res.render("petsdoados", { pets:pet, petsadotados:petadotado  });
        res.update();
    },


}