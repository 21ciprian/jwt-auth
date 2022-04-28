import cors from 'cors'
import express from 'express'
import usersRouter from './routes/usersRouter.js'
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000
app.use('/api', usersRouter)
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
