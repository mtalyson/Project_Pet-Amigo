const localStrategy = require("passport-local").Strategy
const {usuarios} = require("../backend/app/models")
const bcrypt = require("bcryptjs")

module.exports = function(passport){
    passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done) => {

        usuarios.findOne({where :{email: email}}).then((usuarios) => {
            if(!usuarios){
                return done(null,false,{message: "Esta conta não existe"})
            }
            if(bcrypt.compareSync(senha,usuarios.password)){ 
                return done(null,usuarios)
            }
            else{
                return done(null,false,{message: "Senha Incorreta"})
            }
        })

    }))


    passport.serializeUser((usuario, done) => {
        done(null, usuario.id)
    })

    passport.deserializeUser((id, done) => {
        usuarios.findByPk(id).then(usuario => {
            return done(null, usuario);
        })
    })
}