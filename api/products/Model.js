const { Schema, model } = require('mongoose')
const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    Images: {
        type: Array,
        required: true
    }
})
const Product = model('product', ProductSchema)
module.exports = { Product }