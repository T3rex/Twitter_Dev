const Comment = require('../models/comments');
const CrudRepository = require('./crudRepository');
class CommentRepository  extends CrudRepository{

    constructor(){
        super(Comment);
    } 

    async getMoreNestedComments(commentId){
        try {
            const comments = await Comment.findById(commentId).populate({path: 'comments'});
            return comments;
        } catch (error) {
            console.log(error);
            throw error``
        }

    }
}

module.exports = CommentRepository;
