const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const controller = require('../controllers/usuarios');

router.get("/",(req,res)=>{
    res.render("index", {layout:'index.handlebars'})
})

router.post('/',controller.post);

router.post('/users', usersControllers.store);

module.exports = router;