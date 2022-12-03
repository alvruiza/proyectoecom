const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  inStock: Boolean,
  imgUrl: String,
  propiedades: [
    {
      proper1: String,
      proper2: String,
      proper3: String,
      proper4: String
    }
  ]
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
