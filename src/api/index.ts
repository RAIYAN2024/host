import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ ip: req.ip, success: true, message: "Hello World" });
});
export default app;
