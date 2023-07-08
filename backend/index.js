import express from 'express'
import profesoresRoutes from './routes/profesoresRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(express.json())

dotenv.config()

connectDB()

app.use(cors())

const whitheList = ['http://127.0.0.1:5173']
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitheList.some(dominio => dominio === origin)
        if (existe) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use('/api/docentes', profesoresRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
