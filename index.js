import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { authRoute, userRoute, turfRoute, bookingRoute } from "./api/routes/index.js"
import cookieParser from "cookie-parser"
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// routes 
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/turf', turfRoute)
app.use('/api/booking', bookingRoute)



// app.get('/', (req, res) => {
//     console.log("COOKIE ", req.cookies)
//     res.cookie('test', 'test')
//     res.send("Welcome to home page")
// })


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected"))
    .catch((e) => console.log("Error connecting MongoDb : ", e))

mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected")
})


// Error Handler 
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"

    res.status(status).json({
        success: false,
        status,
        message,
        stack: err.stack,
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`)
})
