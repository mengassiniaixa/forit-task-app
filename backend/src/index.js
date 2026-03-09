import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
