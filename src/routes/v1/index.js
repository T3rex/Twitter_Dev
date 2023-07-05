const express = require('express');
const router = express.Router();
const {createTweet,getTweet} = require('../../controller/tweetController');
const {createHashtag} = require('../../controller/hashtagController');
const {toggleLike} =  require('../../controller/likeController');
const {createComment, getMoreComments} = require('../../controller/commentController');
const {signup,login} = require('../../controller/userController');
const authenticate = require('../../config/authenticate');
//Routes
router.get('/tweet/:id',getTweet);
router.post('/tweet',authenticate,createTweet);


//Hastag routes
router.post('/hashtag',createHashtag);

//User routes
router.post('/signup',signup);
router.post('/login',login);

//Likes routes
router.post('/toggleLike',toggleLike);  // {modelType: String[Tweet,Comment], modelId: ObjectId, userId: ObjectId}

//Comments routes
router.get('/viewReplies/:id',getMoreComments); 
router.post('/comment',createComment); // {modelType: String[Tweet,Comment], modelId: ObjectId, userId: ObjectId, content: String}

module.exports = router;
