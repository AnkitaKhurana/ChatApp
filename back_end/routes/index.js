const eli = require('../auth/utils').eli;
const route = require('express').Router();
const User = require('../db/models').User;
const passport = require('passport');

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

route.post('/token', passport.authenticate('local'), (req, res) => {

    AuthToken.create({
        token: uid2(20),
        userId: req.user.id
    }).then((authToken) => {
        return res.send({
            token: authToken.token
        })
    })

});

module.exports = route;