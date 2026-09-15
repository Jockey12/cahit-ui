import { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

const LLAMA_TARGET = process.env.LLAMA_SERVER_URL || "http://127.0.0.1:8080";
const LLAMA_API = process.env.LLAMA_API || "http://localhost:8080/v1";
export const llamaProxyRouter = Router();

const llamaProxy = createProxyMiddleware({
  target: LLAMA_TARGET,
  on: {},
});
