const BaseModel = require('./baseModel');
const bcrypt = require('bcrypt');
class User extends BaseModel {
    constructor() {
        super();
    }

    signIn(username, password) {
        // if (username == 'max' && password == '111111') {
        //     return { userId: 1, name: 'max' }
        // }

        return new Promise((resolve, reject) => {
            this.sql.query('select * from users where name = ?',
                username,
                (err, data) => {
                    if (err) reject(err);
                    else {
                        //console.log(data);
                        data.forEach(item => {
                            //.log(item);
                            bcrypt.compare(password, item.password, (err, result) => {
                                if (result) {
                                    console.log(result);
                                    resolve(item);
                                } else {
                                    reject(err);
                                }
                            })
                        });
                    }
                })
        });

    }


    async register(name, email, password) {
        //hash the password

        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) reject(err)
                else {
                    const password = hashedPassword
                    this.sql.query('insert into users set ?', {
                        name, email, password
                    }, (err, data) => {
                        if (err) reject(err)
                        else resolve(data)
                    });
                }
            })
        });
    }
}


module.exports = User;