const {Like} = require('../models/index');
const CrudRepository = require('./crudRepository');

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeRepository;