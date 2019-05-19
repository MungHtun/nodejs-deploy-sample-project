const BaseModel = require('./baseModel');
class Employee extends BaseModel{
    constructor(){
        super();
    }

    async getMultipleIds(ids) {
        const employee_query = `select * from employees where department_id in (${ids.join(",")})`;

        return new Promise((resolve,reject) => {
            this.sql.query(employee_query, (err, employee) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(employee)
                }
            })
        })
    }
}


module.exports = Employee;