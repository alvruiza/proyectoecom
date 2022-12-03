const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    product: Object,
    qty: Number
})

const Cart = mongoose.model('cart', cartSchema)
    
module.exports = Cart