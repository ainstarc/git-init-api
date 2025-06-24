import { Router } from "express";

const pingRouter = Router();

pingRouter.get("/ping", (req, res) => {
  const now = new Date().toISOString();
  const ip = req.ips?.length ? req.ips[0] : req.ip;
  console.log(`[${now}] ⚡ Ping received from ${ip} → Responding with pong`);
  res.json({ message: "pong" });
});

export default pingRouter;
