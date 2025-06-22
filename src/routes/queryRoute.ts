import { Router } from "express";
import handleQuery from "../controllers/queryController";

const queryRouter = Router();

queryRouter.post("/", handleQuery);

export default queryRouter;
