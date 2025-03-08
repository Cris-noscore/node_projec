import {Router} from "express"

const router = Router()

router.post("/user", (req, res) => {res.send("user rotes")})

export default router
