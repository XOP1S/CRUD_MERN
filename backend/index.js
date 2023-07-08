import express from 'express'
import profesoresRoutes from './routes/profesoresRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(express.json())

dotenv.config()

connectDB()

const corsOptions = {
    origin: 'https://real-erin-crocodile-kit.cyclic.app/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/api/docentes', profesoresRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})