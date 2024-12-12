import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import connectDb from './db/connectDb.js'
import authRoutes from './routes/auth.routes.js'
import mainRoutes from './routes/main.routes.js'


configDotenv()

const app = express()
const PORT = 6060
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/web/", mainRoutes)

app.listen(PORT, () => {
    connectDb()
    console.log(`Server running on http://localhost:${PORT}`);
})
