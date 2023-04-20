const {TweetService} = require('../services/index');

const tweetService = new TweetService();


const createTweet = async (req,res) =>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Tweet created successfully",
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
}

module.exports = {
    createTweet
}