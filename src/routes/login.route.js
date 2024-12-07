/***
 * @license Apache-2.0
 * @copyright isaac chama 2024
 * 
 * ***/

'use strict';

/**
 * Node modules
 * **/
const router = require('express').Router();


/**
 * custom modules
 * 
 * **/
const { login } = require('../controllers/login.controllers');

router.get('/', login);

module.exports = router;