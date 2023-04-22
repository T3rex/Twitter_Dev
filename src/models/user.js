const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true        
    },
    password : {
        type: String,
        required: true,
    },
    name:{
        type: String,        
        required: true
    },
    likes :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'likes'
        }
    ]
},{timestamps:true});


const User = mongoose.model('User',userSchema);

module.exports = User;


