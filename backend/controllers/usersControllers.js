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

        //to pensando uma solução é essa 
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

        //Testado para ver se o usuario enviou ou não foto

        let img = "";
        if(req.file == null){
            let imgBanco = await usuarios.findByPk(id);
            img = imgBanco.fotoUsuario  
        }
        else{
            img = req.file.filename
        }
        
        //Recebendo senha do usuario e verificando se deve ou não atualizar senha
        let {
            password
        } = req.body;

        if(password == ""){
            let atualizaUsuario = await usuarios.update ({
                nomeUsuario: nomeUsuario,
                email: email,
                fotoUsuario:img
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
                fotoUsuario:img,
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
}