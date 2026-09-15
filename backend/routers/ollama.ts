import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

const OLLAMA_TARGET = process.env.OLLAMA_SERVER_URL || "http://localhost:11434";
export const ollamaProxyRouter = Router();

const ollamaProxy = createProxyMiddleware({
  target: OLLAMA_TARGET,
  on: {},
});
