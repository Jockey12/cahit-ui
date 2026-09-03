import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express().use(cors());
const router = express.Router();
const port = 8080;
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
