const express = require('express')
const Product = require('../models/productModel.js')

const productRoutes = express.Router()

productRoutes.get('/', (req,res)=>{
    Product.find({}, (err,docs)=>{
        res.send(docs)
    })
})

productRoutes.get('/some/:id', (req,res)=>{
    Product.findOne({_id: req.params.id}, (err,docs)=>{
        if(docs){
            res.send(docs)
        }else{
            res.status(401).json({err})
        }
    })
})

productRoutes.get('/:slug', (req,res)=>{
  Product.findOne({slug: req.params.slug}, (err,docs)=>{
    if(docs){
        res.send(docs)
    }else{
        res.status(401).json({err})
    }
  })
})

module.exports = productRoutes
