const Comment = require('../models/comments');

class CommentRepository {
    async create(data){
        try {
            const tweet = await Comment.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(tweetId){
        try {
            const tweet = await Comment.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(tweetId, data){
        try {
            const tweet = await Comment.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(tweetId){
        try {
            const tweet = await Comment.findByIdAndDelete(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CommentRepository;
