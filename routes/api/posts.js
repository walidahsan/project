const express = require('express');
const router = express.Router();
const {check} = require('express-validator/check');
const Auth = require('../../middlewares/auth');
const postController = require('../../controllers/post');





router.post('/' , [
    check('text' , 'Text is required').not().isEmpty()
], Auth , postController.postUserPost);


router.get('/',Auth , postController.getUserPost);


router.get('/:id',Auth , postController.getPostById);


router.delete('/:id',Auth , postController.deletePostById);



router.put('/like/:id',Auth , postController.likeUserPost);



router.put('/unlike/:id',Auth , postController.unlikeUserPost);



router.put('/comments/:id' ,[
    check('text' , 'Text is required').not().isEmpty()
] ,Auth  , postController.postUserComments)


router.delete('/comment/:id/:comment_id' , Auth , postController.deleteUserComment)




module.exports = router ;