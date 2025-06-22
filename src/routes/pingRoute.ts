import { Router } from "express"

const pingRouter = Router()

pingRouter.get("/ping", (req, res) => {
  res.json({ message: "pong" })
})

export default pingRouter
