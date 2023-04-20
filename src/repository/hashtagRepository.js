const {Hashtag} = require('../models/index');

class HashtagRepository {
    constructor(){}
    
    async create(data){
        try {
            const response = await Hashtag.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async searchAllTags(taglist){
        try {
            const response = await Hashtag.find({
                title: taglist
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkcreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            Console.log(error);
            throw error;
        }
    }
}

module.exports = HashtagRepository;