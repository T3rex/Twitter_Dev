const express = require('express');
const router = express.Router();
const {createTweet} = require('../../controller/tweetController');
const {createHashtag} = require('../../controller/hashtagController');


//Tweet routes
router.post('/tweet',createTweet);


//Hastag routes
router.post('/hashtag',createHashtag);

module.exports = router;
