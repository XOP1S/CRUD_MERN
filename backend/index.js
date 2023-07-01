import express from "express"
import profesoresRoutes from './routes/profesoresRoutes.js'
import connectDB from "./config/db.js"
import dotenv from "dotenv"

const app=express()
app.use(express.json())

dotenv.config()

connectDB()

app.use('/api/docentes', profesoresRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}` )
})