const {LikeRepository,TwitterRepository,UserRepository} = require('../repository/index');

class LikeService {
    constructor(){
        this.likeRepo = new LikeRepository();
        this.tweetRepo = new TwitterRepository();
        this.userRepo = new UserRepository();
    }

    async toggleLike(modelId, modelType,userId){
        try {
           if(modelType === 'Tweet'){
                var likeable = await this.tweetRepo.get(modelId);               
           }else if(modelType === 'Comment'){

           }else {
                throw new Error("unknown model type");
           }
           const exists = await this.likeRepo.findByUserAndLikable({
            onModel: modelType,
            likeable : likeable.id,
            user : userId
           });
           if(exists){
                await this.userRepo.removeLike(exists.id,userId);
                likeable.likes.pull(exists.id);
                await likeable.save();
                await this.likeRepo.destroy(exists.id);
                var likeAdded = false;
           } else {
                const newLike = await this.likeRepo.create({
                    onModel: modelType,
                    likeable : modelId,
                    user : userId
                });
                await this.userRepo.addLike(newLike.id,userId);
                likeable.likes.push(newLike.id);
                await likeable.save();
                var likeAdded = true;
           }
           return likeAdded;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeService;