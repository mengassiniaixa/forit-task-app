import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📝 Lista de Tareas
        </h1>
        <p className="text-center text-gray-500 mb-4">
          {tasks.length} tareas • {tasks.filter((t) => t.completed).length}{" "}
          completa/s
        </p>

        <TaskForm onTaskCreated={loadTasks} />

        <div className="mt-6 space-y-3">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={loadTasks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
