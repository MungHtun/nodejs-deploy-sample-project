// const sql = require('../utilities/mysql');
const departmentModel = require('../models/departmentModel');
const employeeModel = require('../models/employeeModel');

const department = new departmentModel();
const employee = new employeeModel();

class DepartmentController {
    getAll (req,res) {

        department.getAll()
        .then(departments => {
                const  ids = departments.map(d => d.id); 
                employee.getMultipleIds(ids)
                .then(employees => {
                    departments.forEach(e => {
                        e.employee = employees.filter(item =>  item.department_id == e.id);
                    });
                    res.send(departments);
                })         
                .catch(err => {
                    throw err
                })  
                
            }
        )
        .catch(err => {
            throw err;
        })   
    }

    create(req, res) {
        department.createDepartment(req.body.name)
        .then(data => {res.send("department created")})
        .catch(data => {res.status(400).send("error")})
    }
}

module.exports = DepartmentController;

