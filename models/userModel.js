const BaseModel = require('./baseModel');
class User extends BaseModel {
    constructor(){
        super();
    }

    signIn(username,password){
        if(username == 'max' && password == '111111'){
            return {userId: 1, name: 'max'}
        }
        return false;
    }
}

module.exports = User;