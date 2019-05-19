const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../utilities/key');
const userModel = require('../../models/userModel')



route.post('/signin', (req,res) => {
    //console.log(req.body)
    const user = new userModel();
    user.signIn(req.body.name, req.body.password).then(
        currentUser => {
            if(currentUser){
                const token = jwt.sign({data:currentUser}, key)
                res.status(200).send(token);
            }else{
                res.status(403).send('error');
            }       
        }
    )       
})

route.post('/register', (req,res) => {
    const user = new userModel();
    user.register(req.body.name, req.body.email, req.body.password)
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send('error');
    })
})

module.exports = route;