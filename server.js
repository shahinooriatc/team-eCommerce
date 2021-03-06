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


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mtlu4.mongodb.net/metro?retryWrites=true&w=majority`, ()=>{
    console.log('database connected')
});

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ncuib.mongodb.net/TriAngle?retryWrites=true&w=majority`, ()=>{
//     console.log('database connected')
// });

const port = process.env.PORT || 8000
app.listen(port)