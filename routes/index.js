const express = require('express')
const {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  editarUsuario,
  login,
  validateToken
} = require('../controllers/userControllers')

const auth = require("../middlewares/auth")

const { createProduct, getTenProducts, deleteProduct, editProduct, reducirStock } = require('../controllers/productControllers')


const router = express.Router()

router.route('/usuario').post(crearUsuario).get(obtenerUsuarios)
// router.route("/usuario/admin").post(auth, crearUsuario)
router.route('/usuario/:id').delete(eliminarUsuario).put(editarUsuario)
router.route('/usuario/login').post(login).get(auth, validateToken)

router.route('/productos').post(auth, createProduct)
router.route('/productos/:id').delete(deleteProduct).put(editProduct)
router.route('/productos/:qty').get(getTenProducts)
router.route('/products/reduce').put(reducirStock)



module.exports = router
