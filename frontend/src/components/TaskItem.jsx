import { deleteTask, updateTask } from "../services/api";

function TaskItem({ task, onDelete }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete();
  };

  const handleToggle = async () => {
    await updateTask(task.id, {
      ...task,
      completed: !task.completed,
    });

    onDelete();
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "8px",
        }}
      >
        {task.title}
      </span>

      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default TaskItem;
