const {CommentRepository,TwitterRepository} = require('../repository/index');


class CommentService {
    constructor(){
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TwitterRepository();
    }

    async createComment(data){
        try {
            if(data.modelType == 'Tweet'){
                var commentable = await this.tweetRepo.get(data.modelId);
            } else if(data.modelType == 'Comment'){
                var  commentable = await this.commentRepo.get(data.modelId);
            }
            const comment = await this.commentRepo.create({
                content: data.content,
                userId : data.userId,
                onModel : data.modelType,
                likes : [],
                comments : []
            });
            commentable.comments.push(comment.id);
            await commentable.save();

            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getMoreNestedComments(commentId){
        try {
            const comments = await this.commentRepo.getMoreNestedComments(commentId);
            return comments;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentService;