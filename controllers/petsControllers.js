const {pets} = require("../app/models");

module.exports = {

    async store(req, res){
        const{
            nomePet, raca, cor, idade, sexo, tamanho, peso, observacoes, opcaoVacinado, opcaoCastrado,categoria
        } = req.body;

        const {
      filename
    } = req.file;

        let cadastroPet = await pets.create({
            nomePet: nomePet,
            raca: raca,
            cor: cor,
            idade: idade,
            sexo: sexo,
            tamanho: tamanho,
            peso: peso,
            observacoes: observacoes,
            opcaoVacinado: opcaoVacinado,
            opcaoCastrado: opcaoCastrado,
            fotoPet: filename,
            idCategoria:categoria,
            idUsuarioDoacao: req.user.id,
        })
        
        res.redirect('/?pag=0&tipo=0');
    },

    async update(req, res){
        
        const{
            id, nomePet, raca, cor, idade, sexo, tamanho, peso, observacoes, opcaoVacinado, opcaoCastrado,
        } = req.body;
        
        let imgPet = "";
        await pets.findByPk(id).then(foto=>{
            if(req.file == null){
                imgPet = foto.fotoPet;
            }
            else{
                imgPet = req.file.filename;
            }
        })

       let atualizaPet = await pets.update ({
            nomePet: nomePet,
            raca: raca,
            cor: cor,
            idade: idade,
            sexo: sexo,
            tamanho: tamanho,
            peso: peso,
            observacoes: observacoes,
            opcaoVacinado: opcaoVacinado,
            opcaoCastrado: opcaoCastrado,
            fotoPet: imgPet,
        },{ 
            where: {id:id}
        })

        res.redirect('/petsdoados');
    },

    async delete(req, res){
        
        let ExcluirPet = await pets.update({
            petExcluido: 1,
        }, {
            where: {id:req.params.id}
        })

        res.redirect('/petsdoados');
    }
}