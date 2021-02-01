const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodypaser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
require("./config/auth")(passport);

//Rotas da aplicação
const app = express();
const adocao = require('./backend/routes/adocao');
const doacao = require('./backend/routes/doacao');
const conta = require('./backend/routes/conta');
const index = require('./backend/routes/index');
const logout = require('./backend/routes/logout');
const petsdoados = require('./backend/routes/petsdoados');
const petsadotados = require('./backend/routes/petsAdotados');

//Configuração
    //Sessão
        app.use(session({
            secret: "segredo",
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())
        app.use(flash())
    
    //MiddleWare
        app.use((req,res,next) =>{
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            res.locals.error = req.flash("error");
            res.locals.user = req.user || null;
            next();
        })

    //Configuração handlebars: Extenção que renderiza html no node
        app.engine('handlebars',handlebars({layout:'main'}));
        app.set('view engine','handlebars');
    //Configurando arquivos estaticos no node 
        app.use(express.static(path.join(__dirname,'./frontend/public/')));
        app.set('views', path.join(__dirname, './frontend/views/'));
    //Body-parser fazendo o node entender o corpo de uma requisição
        app.use(bodypaser.urlencoded({extended:false}))
        app.use(bodypaser.json());
        app.use(express.json());
        
app.use('/', adocao);
app.use('/doacao', doacao);
app.use('/conta', conta);
app.use('/index', index);
app.use('/logout', logout);
app.use('/petsdoados', petsdoados);
app.use('/petsadotados', petsadotados);

app.listen(3000,function(){
    console.log("Servidor esta funcionando na URL: http://localhost:3000")
})  