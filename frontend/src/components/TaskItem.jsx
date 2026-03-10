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
    <div className="flex items-center justify-between border p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />

        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskItem;
