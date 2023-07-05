const {UserRepository} = require('../repository/index');
const bcrypt = require('bcrypt');


class UserService{
    constructor(){
        this.userRepo = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    /* async login(data){
        try {          
            const user = await this.userRepo.findUserByEmail(data.email);
            if(user){                
                const result  = await bcrypt.compareSync(data.password, user.password);
                if(result){
                   
                }
                throw ({message : "Password is incorrect"});
            }
            else{
                throw({message: "User not found"});
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    } */

    async getUserByEmail(data){
        try {
          
            const user = await this.userRepo.findUserByEmail(data.email);   
            if(!user){
                throw {
                    message: "User not found",
                    success: false
                }
            }
            if(! await user.comparePassword(data.password)){
                throw {
                    message: "Invalid password",
                    success: false
                }
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }

    // async findUserByEmail(userEmail){
    //     try {
    //         const user = await this.userRepo.findUserByEmail(userEmail);
    //         return user;
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
        
}

module.exports = UserService;