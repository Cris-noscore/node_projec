import {Router} from "express"

const router = Router()

router.post("/", (req, res) => {res.send("user rotes")})

export default router
