/***
 * @license Apache-2.0
 * @copyright isaac chama 2024
 * 
 * ***/

'use strict';

/*Node modules*/ 
const cors =require('cors');
const cookieParser = require('cookie-parser');

/**
 * custom modules
 * **/
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');
const authenticatedUser =require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route');

//initial express app
const express = require('express');
const app = express();

/*
EJS setting
*/
app.set('view engine', 'ejs');

/*
setting static
*/
app.use(express.static(`${__dirname}/public`));

/*
enable cors and cookie parser
*/
app.use(cors()).use(cookieParser());

/*
login page
*/
app.use('/login', login);

/**
 * Auth page
 * **/
app.use('/auth', auth);

/**
 * check user is authenticated
 * **/
app.use(authenticatedUser);

/**
 * Home page 
 * **/
app.use('/', home);

app.listen(5000, ()=>{
    console.log(`Server is listening at http://localhost:5000`);
})