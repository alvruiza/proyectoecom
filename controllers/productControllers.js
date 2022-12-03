const Product = require('../models/Product')
const User = require("../models/User")

const createProduct = async (req, res) => {
  try {
    const user = await User.findById(req.auth.id)
    if(!user.admin) {
      throw new Error("no estás autorizado")
    }
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.json({ success: true, message: 'Producto creado', productId: newProduct._id })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}
// Esto no tiene endpoint asignado, pero así sería consultar los productos por marca
// const getProductsByBran = async (req, res) => {
//   try {
//     const products = await Product.find({ brand: req.params.brand })

//     res.json({ success: true })
//   } catch (error) {
//     res.json({ success: false, error: error.message })
//   }
// }

const deleteProduct = async (req, res) => {
  try{
    const { id } = req.params
    const resultado = await Product.findByIdAndDelete(id)
    if(!resultado) {
      throw new Error('El producto que quieres eliminar no existe')
    }
    res.json({success: true, response:'Producto Eliminado'})
  }catch(error){
    res.json({ success: false, message: error.message })
  } 
}

const editProduct = async (req, res) => {
  try{
    const {id} = req.params 
    resultado = await Product.findByIdAndUpdate(id, req.body, {new: true})
    if(!resultado){
      throw new Error('El producto que quieres editar no existe')
    }
    res.json({success: true, response:'Producto Editado'})
  }catch(erorr){
    res.json({ success: false, message: error.message })
  }
}


const getTenProducts = async (req, res) => {
  const qty = req.params.qty
  try {
    const products = await Product.find().limit(qty)
    res.json({ success: true, products })
  } catch(error) {
    res.json({ success: false, message: error.message})
  }
}

const reducirStock = async (req, res) =>{
  try{
    productos.map(async producto=> {
      await Product.findByIdAndUpdate(producto._id, {stock:  producto.stock - producto.qty}, {new: true})
    })
    res.josn({ success: 'true'})
  }catch(error){
    res.json({success: 'false', error: error.messsage})
  }
}

module.exports = { createProduct, getTenProducts, deleteProduct, editProduct, reducirStock }
