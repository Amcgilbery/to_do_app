function TaskItem({ task, onToggle }) {
  return (
    <div
      className={`p-4 mb-4 bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 ${task.completed ? 'bg-gray-600' : 'bg-gray-700'}`}
      onClick={() => onToggle(task.id)}
    >
      <div className="flex items-center justify-between">
        <span className={`text-lg font-medium ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
          {task.name}
        </span>
        <span className={`text-xs ${task.completed ? 'text-green-500' : 'text-gray-400'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;