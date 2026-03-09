import express from "express";
import tasks from "../data/tasks.js";

const router = express.Router();

// GET /api/tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// PUT /api/tasks/:id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE /api/tasks/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(index, 1);

  res.json(deletedTask);
});

export default router;
