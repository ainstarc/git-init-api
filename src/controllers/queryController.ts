import { Request, Response } from "express";
import { z } from "zod";
import { getGitResponse } from "../services/responder";
import { QueryResult } from "../types";

const QuerySchema = z.object({
  query: z.string().min(1, "Query must be a non-empty string"),
});

export default async function handleQuery(req: any, res: any) {
  const parsed = QuerySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid request body",
      details: parsed.error.format(),
    });
  }

  try {
    const result: QueryResult = await getGitResponse(parsed.data.query);
    return res.json(result);
  } catch (error) {
    console.error("getGitResponse failed:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
