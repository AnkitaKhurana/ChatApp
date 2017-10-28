const eli = require('../auth/utils').eli;
const route = require('express').Router();
const User = require('../db/models').User;
const passport = require('passport');

route.get('/',(req,res)=>{
    res.render('index', { title: 'CHATAPP'});
    // res.send(req.user);
});


route.get('/signup',(req,res)=>{
    res.render('signup', { title: 'CHATAPP'});
});


route.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        //NEVER EVER DO THIS IS PRODUCTION
        //PASSWORDS SHOULD BE HASHED
        password: req.body.password
    }).then((user) => {
        res.redirect('/')
    })
});

route.get('/chatwindow',passport.authenticate('local',{
    res.render('chat', { title: 'CHATAPP'});



}));

route.post('/login',passport.authenticate('local',{
    successRedirect:'/chatwindow',
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