const express = require('express');
const route = express.Router();
const sql = require('../utilities/mysql');
const departmentsRoute = require('./apiRoute/departmentRoute');
const jwt = require('jsonwebtoken');
const key = require('../utilities/key');

const userModel = require('../models/userModel')

route.use('/departments', departmentsRoute); //seperate as route path


route.post('/signin', (req,res) => {
    //console.log(req.body)
    const user = new userModel();
    const currentUser = user.signIn(req.body.name, req.body.password);
    if(currentUser){
        const token = jwt.sign({data:currentUser}, key)
        res.status(200).send(token);
    };
    res.status(403).send('error');
})
module.exports = route;