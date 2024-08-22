import express from 'express'
import { fetchProducts, insertProduct, fetchProduct, updateProduct, deleteProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/', fetchProducts)
router.post('/addProducts', insertProduct)

router.get('/:id', fetchProduct)
router.delete('/delete/:id', deleteProduct)
router.patch('/update/:id', updateProduct)

export default router