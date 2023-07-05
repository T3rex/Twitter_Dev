const {CommentService} = require('../services/index');

const commentService = new CommentService();

const createComment = async(req,res) =>{
    try {        
        const response  = await commentService.createComment(req.body);
        return res.status(200).json({
            data: response,
            message :  'Comment added successfully',
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

const getMoreComments = async (req, res) =>{    
    try {        
        const response  = await commentService.getMoreNestedComments(req.params.id);
        return res.status(200).json({
            data: response,
            message :  'Comment successfully fetched',
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
    createComment,
    getMoreComments
}