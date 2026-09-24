import { spawn } from "node:child_process";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express().use(cors());
const router = express.Router();
const port = 8078;
// const fPort = 8079;
// const nextProcess = spawn("bun", ["dev", "-p", fPort], {
//   cwd: "../cahit-front/",
//   stdio: "inherit",
// });

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} from ${req.host}`);
  next();
});
app.post("/chat", (req, res) => {
  res.send("Content-Type");
});

router.get("/user", (req, res, next) => {});
app.listen(port, () => {
  console.log(`listening: ${port}`);
});

// frontend server
// nextProcess.on("error", (err) => {
//   console.error("Failed", err);
//   process.exit(1);
// });
//
// nextProcess.on("exit", (code, signal) => {
//   console.log("Exited frontend", code, signal);
//   process.exit(code ?? 0);
// });
//
console.log("Backend running on: ", port);
// console.log("Dev frontend server running on: ", fPort);
