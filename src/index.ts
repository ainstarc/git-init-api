import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import queryRouter from "./routes/queryRoute";
import pingRouter from "./routes/pingRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/", pingRouter);
app.use("/query", queryRouter);

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
