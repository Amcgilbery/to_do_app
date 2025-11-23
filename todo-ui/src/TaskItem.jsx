function TaskItem({ task, onToggle }) {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`
        group
        p-4 mb-3
        rounded-md
        border-2
        cursor-pointer
        transition-all duration-200

        ${
          task.completed
            ? 'bg-tachi-panel border-tachi-teal shadow-[0_0_12px_rgba(0,255,255,0.35)]'
            : 'bg-tachi-layer border-tachi-grayline hover:border-tachi-teal hover:shadow-[0_0_12px_rgba(0,255,255,0.2)]'
        }
      `}
    >
      <div className="flex items-center justify-between">
        {/* Task text */}
        <span
          className={`
            text-lg font-medium transition-colors duration-200

            ${
              task.completed
                ? 'line-through text-tachi-gray'
                : 'text-white group-hover:text-tachi-teal'
            }
          `}
        >
          {task.name}
        </span>

        {/* Status text */}
        <span
          className={`
            text-xs transition-colors duration-200

            ${task.completed ? 'text-tachi-teal' : 'text-tachi-gray group-hover:text-tachi-teal'}
          `}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
