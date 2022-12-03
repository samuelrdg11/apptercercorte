import express from 'express'
import { createProdu, deleteProdu, getAllProdu, showProdu, updateProdu } from '../controllers/ProductController.js'
const ProductRouter = express.Router()

ProductRouter.get('/', getAllProdu)
ProductRouter.get('/:id', showProdu)
ProductRouter.post('/',createProdu)
ProductRouter.put('/:id', updateProdu)
ProductRouter.delete('/:id', deleteProdu)

export default ProductRouter