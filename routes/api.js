const express = require('express');
const route = express.Router();
const sql = require('../utilities/mysql');
const departmentsRoute = require('./apiRoute/departmentRoute');
const jwt = require('jsonwebtoken');
const key = require('../utilities/key');

const authRoute = require('../routes/apiRoute/auth');

const userModel = require('../models/userModel')

route.use('/departments', departmentsRoute); //seperate as route path

route.use('/auth', authRoute);

module.exports = route;