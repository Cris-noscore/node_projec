import express from "express"
import userRoutes from "./presentation/routes/useRoutes"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use("/api", userRoutes)

const PORT = process.env.PORT || 3000

app. listen(PORT, () => console.log(`application is running on port ${PORT}`))