const express = require('express');
const router = express.Router();
const Auth = require('../../middlewares/auth');
const authController = require('../../controllers/auth');
const {check} = require('express-validator/check');






router.get('/' ,  Auth  ,  authController.getUSer);

router.post('/' , [

    check('email' , 'Please enter valid email').isEmail(),
    check('password' , 'Please enter password that contains 6 or more characters').isLength({min : 6})
    
] , authController.postUser)




module.exports = router ;
