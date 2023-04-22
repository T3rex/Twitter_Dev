const {LikeService} = require('../services/index');

const likeService  = new LikeService();

const toggleLike = async(req,res) =>{
    try {        
        const response  = await likeService.toggleLike(req.body.modelId,req.body.modelType,req.body.userId);
        return res.status(200).json({
            isAdded: response,
            message :  response ?'Like added successfully': 'Like removed successfully',
            success: true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message : "Something went wrong",
            success: false,
            err : error
        });
    }
}

module.exports = {
    toggleLike
}