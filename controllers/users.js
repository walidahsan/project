const {validationResult}  = require('express-validator/check')
const User = require('../models/users');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



exports.postUser = async (req , res , next ) => {

    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const {email , name , password} = req.body;

    try {
        let user = await User.findOne({email});
        if(user) {
           return res.status(400).json({errors : [{msg : 'User already exist'}]})
        }

        const avatar = gravatar.url(email , {
            s : '200',
            r : 'pg',
            d : 'mm'
        }) 

        user = new User({
            email,
            name,
            password ,
            avatar
        })

        const salt  =  await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password , salt);

        await user.save();

        const payload = {
            user : {
                id : user.id,
                name : user.name,
            }
        }
        jwt.sign(payload , process.env.JWT_KEY  , {
            expiresIn : 360000
        },
        (err , token ) => {
            if(err) throw err;
            res.json({token})
        }
        )
        
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
        
 
}