import express from "express";
import cors from 'cors';
import db from './database/db.js'

import PRoutes from './routes/ProductRoutes.js'
import PqRoutes from './routes/PqrRoutes.js'
import ERoutes from './routes/EncuestaRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/Productos', PRoutes)
app.use('/Pqrs', PqRoutes)
app.use('/Encuestas', ERoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log('Conexion fallida a la DB')
}

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000/')
})
