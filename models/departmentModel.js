const BaseModel = require('./baseModel');
class Department extends BaseModel {
    constructor(){
        super();
    }

    async getAll() {
        const department_query = `select * from departments`;
    
        return new Promise((resolve,reject) => {
            this.sql.query(department_query, (err, departments) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(departments)
                }
            })
        }) 
    }
}

module.exports = Department;