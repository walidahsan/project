const express = require('express');
const router = express.Router();
const {check} = require('express-validator/check');
const userController = require('../../controllers/users');


router.post('/' , [
    check('name' , 'Name is required').not().isEmpty(),
    check('email' , 'Please enter valid email').isEmail(),
    check('password' , 'Please enter password that contains 6 or more characters').isLength({min : 6})
] , userController.postUser)






module.exports = router ;