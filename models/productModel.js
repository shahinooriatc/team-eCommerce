const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type:String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    discription:{
        type: String,
        required: true
    },
    catagory:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    NumberOfReview:{
        type: Number
    },
    stock:{
        type: Number,
        required: true
    },
    BrandName:{
        type: String,
        required: true
    },
    totalSale:{
        type: String,
        required: true
    },
    coupon:{
        type: Boolean,
        default: false
    },
    discountAmount:{
        type: Number
    },
    price:{
        type: Number,
        required:true
    }

},
    {
        timestamps: true
    }
)


const Product = mongoose.model('products', ProductSchema)

module.exports = Product