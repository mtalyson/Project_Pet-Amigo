const {usuarios} = require("../app/models");
const {enderecos} = require("../app/models");
const bdcrypt = require('bcryptjs');

module.exports = {

    async store(req, res){
        const{
            nomeUsuario, email, password,
        } = req.body;

        const salt = await bdcrypt.genSaltSync(10);
        const hash = await bdcrypt.hashSync(password,salt);

        let cadastroUser = await usuarios.create({
            nomeUsuario: nomeUsuario,
            email: email,
            password: hash,
            fotoUsuario:"usernovo.png"
        })

        let idNovoUsuario = await usuarios.findOne({
            where:{email:email}
        })

        let endereco = await enderecos.create({
            idUsuario: idNovoUsuario.id
        })

        res.redirect('/');
    },

    async update(req, res){
        
        //Recebendo dados do formulario
        const{
            id, nomeUsuario, email,logradouro, casa, quadra, bairro, cidade, estado, cep,
        } = req.body; 

        //Recebendo senha do usuario e verificando se deve ou não atualizar senha
        let {
            password
        } = req.body;

        if(password == ""){
            let atualizaUsuario = await usuarios.update ({
                nomeUsuario: nomeUsuario,
                email: email,
            },{ 
                where: {id:id}
            })
        }
        else{
            //encriptando a senha 
            const salt = await bdcrypt.genSaltSync(10);
            const hash = await bdcrypt.hashSync(password,salt);
            //Realizando o update
            let atualizaUsuario = await usuarios.update ({
                nomeUsuario: nomeUsuario,
                email: email,
                password:hash,
            },{ 
                where: {id:id}
            })
            
        }

        //Atualizando o endereço
        let atualizarEndereco = await enderecos.update({
            idUsuario: req.user.id,
            logradouro: logradouro,
            casa: casa,
            quadra: quadra,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep
        },{ 
            where: {idUsuario:id}
        })
        
        res.redirect('/conta');
    },

    async updateImage(req, res) {
        const{
            id,
        } = req.body;

        let img = "";
        if(req.file == null){
            let imgBanco = await usuarios.findByPk(id);
            img = imgBanco.fotoUsuario  
        }
        else{
            img = req.file.filename
        }

        let atualizaImagem = await usuarios.update ({
            fotoUsuario:img,
        },{ 
            where: {id:id}
        })

        res.redirect('/conta');
    }
}