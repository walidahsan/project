const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/profile');
const Auth = require('../../middlewares/auth');
const {check} = require('express-validator/check');




router.get('/me' ,Auth , profileController.getProfile)



router.post('/' , [
    check('status' , 'Status is required').not().isEmpty(),    
    check('skills' , 'Skills is required').not().isEmpty(),    
], Auth , profileController.postProfile)


router.get('/' , profileController.getAllProfiles)




router.get('/user/:user_id' , profileController.getProfileById)


router.delete('/' , Auth , profileController.deleteProfileAndUser)


router.put('/experiance' ,[
    check('title' , 'Titile is Required').not().isEmpty(),
    check('company' , 'Company is Required').not().isEmpty(),
    check('from' , 'From is Required').not().isEmpty(),

] , Auth , profileController.addExperiance)



router.delete('/experiance/:exp_id' , Auth , profileController.deleteUserExperiance);



router.put('/education' ,[
    check('school' , 'School is Required').not().isEmpty(),
    check('degree' , 'Degree is Required').not().isEmpty(),
    check('fieldofstudy' , 'Field Of Study is Required').not().isEmpty(),
    check('from' , 'From is Required').not().isEmpty(),

] , Auth , profileController.addEducation)




router.delete('/education/:edu_id' , Auth , profileController.deleteUserEducation);




router.get('/github/:username' , profileController.getGithubRepos);




module.exports = router;