/***
 * @license Apache-2.0
 * @copyright isaac chama 2024
 * 
 * ***/

'use strict';


/**
 * custom modules
 * **/
const { getRefreshToken } = require('../api/refresh_token.api');

const refreshToken = async (req, res)=>{
    const MILISECONDS = 1000;
    const response =await getRefreshToken(req.cookies.refresh_token);
if(response.status === 200){
    const {
        access_token,
        expires_in
    }= response.data;

    res.cookie('access_token', access_token, { maxAge: expires_in * MILISECONDS });
    res.redirect(req.query.redirect);
}else{
    res.redirect('/login');
}

};

module.exports = { refreshToken }