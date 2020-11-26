const express = require('express');
const router = express.Router();
const path =  require('path'); 
const {autenticado} = require("../src/autenticado");

router.get('/',(req, res, next) => {
    req.logOut();
    res.redirect("/index");
});

module.exports = router;