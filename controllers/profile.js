const Profile = require('../models/profile');
const User = require('../models/users');
const {validationResult}  = require('express-validator/check');
const request = require('request');


//GET USER Profile

// PRivate ROUTE


exports.getProfile = async(req,res) => {
    try {
        
        // const errors = validationResult(req);
        // if(!errors.isEmpty()){
        //     return res.status(400).json({errors : errors.array()})
        // }

      const profile = await Profile.findOne({user: req.user.id}).populate('user' , ['name','avatar'])

      if(!profile){
          return res.status(400).json("Ther is no Profile for this user")
      }

      res.status(200).json(profile)


    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server Error')
    }
}


//POST USER PROFILE 

// PRivate ROUTE

exports.postProfile = async (req , res) => {
    const errors = validationResult(req);
    console.log(req.body)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;


    const profileFields = {} ;
    profileFields.user = req.user.id;
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(bio) profileFields.bio= bio;
    if(status) profileFields.status = status;
    if(githubusername) profileFields.githubusername = githubusername;

    if(skills){
        profileFields.skills = skills.split(',').map(skill => skill.trim())
    }

    profileFields.social = {}

    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(instagram) profileFields.social.instagram = instagram;
    if(linkedin) profileFields.social.linkedin = linkedin;
    console.log(profileFields.skills);
    
    try {

        let profile = await Profile.findOne({user : req.user.id}).populate('user' , ['name','avatar'])

        if(profile){
            profile = await Profile.findOneAndUpdate({user : req.user.id} , {
                $set : profileFields,
            },
            {
                new : true
            })
            return res.json(profile)
        }
        
        profile = new Profile(profileFields);
        await profile.save();
        res.status(201).json(profile)
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server ERror')
    }


}


// GET ALL PROFILES 
// PUBLIC ROUTE
exports.getAllProfiles = async (req, res) => {
    try {
        
        const profile = await Profile.find().populate('user',['name','avatar']);
        res.status(200).json(profile);
    } catch (err) {

        console.log(err.message);
        return res.status(500).json('Server Error')
        
    }
}


//GET PROFILE BY USERID
//PUBLIC ROUTE

exports.getProfileById = async (req , res) => {
    try {
        
        const profile = await Profile.findOne({user : req.params.user_id}).populate('user' , ['name' , 'avatar'])
        if(!profile){
            return res.status(400).json({msg : 'No Profile found of this User'})
        }
        res.json(profile)

    } catch (err) { 
        console.log(err.message);
        if(err.kind == 'ObjectId'){
            res.json({
                msg : "Profile not FOund"
            })
        }
        res.status(500).json('Server Error')
        
    }
}

//PRIVATE ROUTE
//DELETE PROFILE USER & POSTS
//DELETE api/profile

exports.deleteProfileAndUser = async (req , res ) => {
    try {
        //delete posts

        //delete Profile

        await Profile.findOneAndRemove({user : req.user.id})

        //delete User

        await User.findOneAndRemove({_id : req.user.id})

        res.status(200).json({
            msg : 'User Deleted Successfully'
        })

    } catch (err) {

        console.log(err.message);
        res.status(500).json("Server Error")
        
    }
}



// Private Route 
// Add Experiance 
//api/profile/experinace


exports.addExperiance = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body ;

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description,
    }

    try {

        const profile  = await Profile.findOne({user : req.user.id})

        profile.experiance.unshift(newExp);
        
        await profile.save();

        res.status(200).json(profile)


    } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error")
        
    }
}


//PRIVATE ROUTE
//USER DELETE EXPERIANCES
//DELETE EXPERIANCE BY EXPERIANCE ID 



exports.deleteUserExperiance = async(req, res) => {


    try {

        const profile  = await Profile.findOne({user : req.user.id});
        console.log(profile)
        const indexOfExperiance  = profile.experiance.map(item => item.id).indexOf(req.params.exp_id)
        profile.experiance.splice(indexOfExperiance , 1);

        await profile.save();


        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server Error')
    }
}




// Private Route 
// Add Education
//api/profile/education


exports.addEducation = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body ;

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description,
    }

    try {

        const profile  = await Profile.findOne({user : req.user.id})

        profile.education.unshift(newEdu);
        
        await profile.save();

        res.status(200).json(profile)


    } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error")
        
    }
}


//PRIVATE ROUTE
//USER DELETE EXPERIANCES
//DELETE EXPERIANCE BY EXPERIANCE ID 



exports.deleteUserEducation = async(req, res) => {


    const profile = await Profile.findOne({user : req.user.id});

    const indexOfEducation = profile.education.map(item => item.id).indexOf(req.params.edu_id)

    profile.education.splice(indexOfEducation , 1);

    await profile.save();
    res.json(profile);

    try {

        
    } catch (err) {
        console.log(err.message);
        res.status(500).json('Server Error')
    }
}


//Public ROUTE
//Get repos from github user


exports.getGithubRepos = async ( req , res ) => {

    try {

        const options = {
            uri : `https://api.github.com/users/${req.params.username}/repos?per_page=5$
            sort=created:asc&client_id=${process.env.githubClientId}&client_secret=${process.env.githubClientSecret}`,
            method : 'GET',
            headers : {'user-agent' : 'nodejs'}
        }
        
        request(options , (error , response , body ) => {
            if(error){
                console.error(error)
            }
            if(response.statusCode !== 200){
                return res.status(404).json('Not Github PRofile Found')
            }
            res.status(200).json(JSON.parse(body))
        })


    } catch (err) {
        console.err(err.message)
        res.status(500).json('Server Error')
    }
}