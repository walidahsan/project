const User =  require('../models/users');
const {validationResult}  = require('express-validator/check')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//GET USER 


exports.getUSer = async (req, res, next) => {
    
    
    try {
        const user  = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
} catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}



//POST USER 


exports.postUser = async(req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()})
    }

    try {
        
        const {email , password} = req.body;

        let user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({msg : 'Invalid Credentials'})
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(404).json({msg : 'Invalid Credentials'})
        }

        const payload = {
            user :  {
                id : user.id
            }
        }

        jwt.sign(payload , process.env.JWT_KEY , {
            expiresIn : 360000
        },

        (err , token) => {
            if(err) throw err;
            res.json({token})
        }

        )

    } catch (err) {

        console.log(err.message);

        return res.status(500).json('Server Error')
        
    }
}

