// const cors = require('cors');
// app.use(cors());

const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const passport = require('./auth/passport');    //authentication, user


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(passport.initialize());
app.use(passport.session());


app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));
app.use('/', express.static(__dirname + "/public_static"));


app.listen(3456, function () {
    console.log("Server started on http://localhost:3456");
});