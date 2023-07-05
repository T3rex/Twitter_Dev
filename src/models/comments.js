const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,        
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    },
    onModel :{
        type: String,
        required: true,
        enum : ['Tweet','Comment'],
    },
    likes :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Likes'
        }
    ],
    commentable : {
        type: mongoose.Schema.Types.ObjectId,
        refPath  : 'onModel'
    },
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],   

},{timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;