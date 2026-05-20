import express from "express";
import chatRouter from "./routes/chat.routes.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running...",
  });
});

app.use("/api",chatRouter);

export default app;
