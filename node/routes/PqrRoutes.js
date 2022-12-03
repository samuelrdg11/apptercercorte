import express from 'express'
import { createPqr, deletePqr, getAllPqr, showPqr, updatePqr } from '../controllers/PqrController.js'
const PqrRouter = express.Router()

PqrRouter.get('/', getAllPqr)
PqrRouter.get('/:id', showPqr)
PqrRouter.post('/', createPqr)
PqrRouter.put('/:id', updatePqr)
PqrRouter.delete('/:id', deletePqr)

export default PqrRouter