
const route = require('express').Router();
const User = require('../db/models').User;

route.get('/',(req,res)=>{
    res.render('index', { title: 'CHATAPP'});

    // res.send(req.user);
});



route.post('/login',passport.authenticate('local',{
    successRedirect:'/api/temp',
    failureRedirect:'/'
}));



route.get('/logout', (req, res) => {
    req.user = null;
    req.logout();
    req.session.destroy(function () {
        res.render('index', { title: 'CHATAPP'});
        // res.redirect('/login.html')
    })
});


route.get('/profile', eli('/'), (req, res) => {
    res.send(req.user);
});


module.exports = route;