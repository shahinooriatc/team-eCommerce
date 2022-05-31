const express = require('express')
const User = require('../models/userModel.js')

const userRoutes = express.Router()

userRoutes.get('/', (req,res)=>{
    User.find({}, (err,docs)=>{
        res.send(docs)
    })
})

module.exports = userRoutes