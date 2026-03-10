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
    <div>
      <h1>Task List</h1>

      <TaskForm onTaskCreated={loadTasks} />

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={loadTasks} />
      ))}
    </div>
  );
}

export default TaskList;
