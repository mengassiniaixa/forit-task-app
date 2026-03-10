import { useState } from "react";
import { createTask } from "../services/api";

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    await createTask({ title });

    setTitle("");
    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
