import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express().use(cors());
const router = express.Router();
const port = 8080;

app.post("/chat", (req, res) => {
  res.send("Content-Type");
});

router.get("/user", (req, res, next) => {});
app.listen(port, () => {
  console.log(`listening: ${port}`);
});
