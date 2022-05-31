const express = require('express')
const User = require('../models/userModel.js')
const bcrypt = require('bcrypt');
const {generateToken } = require('./utils.js')

const Auth = express.Router()

Auth.post('/login', async(req,res)=>{
    const auth = await User.findOne({email: req.body.email})

    if(auth){
        if(bcrypt.compareSync(req.body.password, auth.password)){
            res.send({
                _id: auth._id,
                name: auth.name,
                email: auth.email,
                isAdmin: auth.isAdmin,
                token: generateToken(auth)
            })
            return
        }
    }
    res.status(401).send({msg:'Invalid Email or Password'})
})


Auth.post('/registration', async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    })

    const user = await newUser.save().then((user)=>{
        res.status(201).json({
            user,
            msg: 'Registration successful'
        })
    }).catch((err)=>{
        res.status(400)
    })
})

module.exports = Auth