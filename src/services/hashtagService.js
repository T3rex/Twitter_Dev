const {HashtagRepository} = require('../repository/index');

class HashtagService {
    constructor(){
        this.hashtagRepo =  new HashtagRepository();
    }

    async create(data){
        try {
            const response = await this.hashtagRepo.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async searchAllTags(tagList){
        try {
            const response = await this.hashtagRepo.searchAllTags(tagList);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = HashtagService;