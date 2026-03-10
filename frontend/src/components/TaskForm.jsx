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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
