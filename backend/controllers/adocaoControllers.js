const {pets} = require("../app/models");
const {petsadotados} = require("../app/models");
const {categorias} = require("../app/models");
const Op = require("sequelize").Op;

module.exports = {

    async show(req, res){

        let listarPets;
        
        if(req.query.tipo ==0){
        listarPets = await pets.findAll({
            offset: parseInt(req.query.pag * 12),
            limit: 12,
            where:{[Op.and]:{statusAdocao:0, petExcluido:0}
        }});
        }
        else{
        listarPets = await pets.findAll({
                offset: parseInt(req.query.pag * 12),
                limit: 12,
                where:{[Op.and]:{statusAdocao:0, petExcluido:0, idCategoria:req.query.tipo}
            }});
        }
    
        let categoria = await categorias.findAll();

        let cont = await pets.count()
        let resp = Math.ceil(cont / 12);

        res.render('adocao', {pets:listarPets,categoria:categoria,pagina: req.query.pag,resp});
        
    },

    async store(req, res){
        let usuarios = await pets.findAll({
            where: {id:req.query.idpet}
        })

        let adotarPets = await petsadotados.create({
            idUsuario: req.user.id,
            idUsuarioDoador: usuarios[0].get('idUsuarioDoacao'),
            idPet: req.query.idpet
        });

        let atualizaStatus = await pets.update({
            statusAdocao: 1,
        }, {
            where: {id:req.query.idpet}
        })

        res.redirect('/?pag=0&tipo=0')
    }
};