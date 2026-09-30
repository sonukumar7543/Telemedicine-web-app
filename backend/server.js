import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


// app configuration
const app = express()
const port = process.env.PORT || 4000

// connect to database
connectDB()
// connect to cloudinary
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
// local host 5000/api/admin/add-doctors

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})




