const express = require('express')
const productData = require('../Data/itemData.js')
const userData = require('../Data/user.js')
const Product = require('../models/productModel.js')
const User = require('../models/userModel.js')

const seedRoutes = express.Router()

seedRoutes.get('/product', async(req,res)=>{
    await Product.deleteMany()
    const response = await Product.insertMany(productData)
    res.send(response)
})

seedRoutes.get('/user', async(req,res)=>{
    await User.deleteMany()
    const response = await User.insertMany(userData)
    res.send(response)
})

module.exports = seedRoutes