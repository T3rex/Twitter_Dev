const {UserService} = require('../services/index');

const userService = new UserService();

const signup = async(req,res) =>{
    try {        
        const response  = await userService.signup(req.body);
        return res.status(200).json({
            data: response,
            message :  'User created successfully',
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

const login = async(req,res) =>{
    try {    
        const response = await userService.getUserByEmail(req.body);   
        return res.status(200).json({
            token: response,
            success: true,
            message : 'User logged in successfully',
            err : {}
        });
    } catch (error) {       
        return res.status(500).json({
            data:{},
            message : "Something went wrong",
            success: false,
            err : error
        });
    }
}


module.exports = {
   signup,login
}