const express = require('express');
const router = express.Router();
const {createTweet} = require('../../controller/tweetController');
const {createHashtag} = require('../../controller/hashtagController');
const {toggleLike} =  require('../../controller/likeController');


//Tweet routes
router.post('/tweet',createTweet);


//Hastag routes
router.post('/hashtag',createHashtag);

//User routes

//Likes routes
router.post('/toggleLike',toggleLike);  

module.exports = router;
