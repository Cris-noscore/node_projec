import express from "express"
//import userRoutes from ""
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app. listen(PORT, () => console.log('application is running on port ${PORT}'))