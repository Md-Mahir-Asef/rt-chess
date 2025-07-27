import express from "express";
import cors from "cors";
import {} from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
app.use(express.json());

export default app;
