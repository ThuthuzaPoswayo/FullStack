import express from 'express'
import { fetchProducts, insertProduct, fetchProduct, updateProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/', fetchProducts)
router.post('/addProducts', insertProduct)

router.get('/:id', fetchProduct)
router.patch('/update/:id', updateProduct)

export default router