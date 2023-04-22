const {User} = require('../models/index');
const CrudRepository = require('./crudRepository');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }  

    async addLike(likeId, userId){
        try {
            const user = await User.findById(userId);
            user.likes.push(likeId);
            await user.save();
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async removeLike(likeId, userId){
        try {
            const user = await User.findById(userId);
            user.likes.pull(likeId);
            await user.save();
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;