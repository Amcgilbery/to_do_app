function TaskItem({ task, onToggle, onDelete }) {
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

        {/* Delete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onToggle when clicking delete
            console.log('Delete clicked for task ID:', task.id);
            onDelete(task.id);
          }}
          className="
          text-sm
         text-tachi-red
         hover:text-white
         hover:bg-tachi-red
         bg-tachi-ink
         rounded-full
         px-3 py-1
         transition
         duration-300
         ease-in-out
         shadow-tachi-soft
         group
         flex items-center justify-center
         focus:outline-none
         focus:ring-2
         focus:ring-tachi-cyan
         focus:ring-offset-2"
        >
          <span className="group-hover:animate-pulse-glow">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
