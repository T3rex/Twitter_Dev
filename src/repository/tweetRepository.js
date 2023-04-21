const {Tweet} = require('../models/index');
const CrudRepository = require('./crudRepository');

class TwitterRepository extends CrudRepository {
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({path:"comment"});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(tweetId, data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndDelete(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(offset,limit){
        try {
            const result = await Tweet.find().limit(limit).skip(offset);
            return result;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async getTweetEmail(tweetId){
        try {           
            const tweet = await this.get(tweetId);
            const response = tweet.contentWithEmail;
            return response;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

}

module.exports = TwitterRepository;