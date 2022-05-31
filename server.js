const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
 

const app = express()
require('dotenv').config()
app.use(cors())

const Product = require('./models/productModel');
const productRoutes = require('./routes/productRouter');
const seedRoutes = require('./routes/seedRouter');
const userRoutes = require('./routes/userRouter');
const Auth = require('./routes/authRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/product', productRoutes)
app.use('/api/seed', seedRoutes)
app.use('/user', userRoutes)
app.use('/api/auth', Auth)

app.get('/', function (req, res) {
  res.send('This is Your Server')
})

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('database connected')
});


app.listen(8000)