const express = require('express');

const bodyParser = require('body-parser');
const app = express();

const passport = require('./auth/passport');    //authentication, user


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));