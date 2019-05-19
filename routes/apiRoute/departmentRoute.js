const express = require('express');
const route = express.Router();
const sql = require('../../utilities/mysql');

const departmentController = require('../../controller/departmentController');

const controller = new departmentController();

const jwt = require('jsonwebtoken');
const key = require('../../utilities/key');

route.use(require('../../middlewares/auth'));

route.get('/', (req, res) => {
    controller.getAll(req,res);     
})

route.post('/', (req, res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    // jwt.verify(token, key, (err,payload) => {
    //     if(err){
    //         res.status(400).send("Invalid");

    //     }else{
    //         res.send(payload);
    //     }
    //     //console.log("error", err);
    //     //console.log("Payload", payload);
    // })

    res.send("Create a Department");
})

route.put('/:id/update', (req, res) => {

    const id = req.params.id;

    sql.query("Select * from departments where id = ?", id, (err, data) => {
        if (err) {
            res.send("Error");
        }
        else {
            //resolve(data[0]);
            res.send(data[0]);
        }
    });

    //res.send("Update Departments");
})

route.delete('/', (req, res) => {
    res.send("Delete Departments");
})

module.exports = route;