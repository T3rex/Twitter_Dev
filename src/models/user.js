const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


userSchema.pre('save',async function(next){
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = await bcrypt.hash(this.password, salt);    
    this.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = async function (plainPassword){
    const result= await bcrypt.compare(plainPassword,this.password);
    return result;
};

userSchema.methods.genJWT = function generate(){
    return jwt.sign({id: this._id,email: this.email},'secret',{
        expiresIn: '1d'
    });
}


const User = mongoose.model('User',userSchema);

module.exports = User;


