
const route = require('express').Router();
const User = require('../db/models').User;

route.get('/',(req,res)=>{
    res.render('index', { title: 'Elista'});

    // res.send(req.user);
});





module.exports = route;