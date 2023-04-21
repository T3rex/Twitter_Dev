const {User} = require('../models/index');
const CrudRepository = require('./crudRepository');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }  
}

module.exports = UserRepository;