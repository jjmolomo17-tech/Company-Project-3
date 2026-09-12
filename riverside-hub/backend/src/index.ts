import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { supabase } from './db'
import authRoutes from './routes/auth'
import bookingRoutes from './routes/bookings'
import donationRoutes from './routes/donations'
import adminRoutes from './routes/admin'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/auth', authRoutes)
app.use('/bookings', bookingRoutes)
app.use('/donations', donationRoutes)
app.use('/admin', adminRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
