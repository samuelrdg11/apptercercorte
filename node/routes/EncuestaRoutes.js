import express from 'express'
import { createEncuest, deleteEncuest, getAllEncuest, showEncuest, updateEncuest } from '../controllers/EncuestaController.js'
const EncuestaRouter = express.Router()

EncuestaRouter.get('/', getAllEncuest)
EncuestaRouter.get('/:id', showEncuest)
EncuestaRouter.post('/', createEncuest)
EncuestaRouter.put('/:id', updateEncuest)
EncuestaRouter.delete('/:id', deleteEncuest)

export default EncuestaRouter