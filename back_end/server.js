// const cors = require('cors');
// app.use(cors());

const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const expressSession = require('express-session');


// const passport = require('./auth/passport');    //authentication, user


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.use(passport.initialize());

// app.use(passport.session());


app.use('/',require('./routes/index') );

app.use('/api', require('./routes/api'));
app.use('/', express.static(__dirname + "/public_static"));


app.listen(3456, function () {
    console.log("Server started on http://localhost:3456");
});
