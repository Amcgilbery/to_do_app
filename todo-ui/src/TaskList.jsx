import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle }) {
  const renderEmptyState = () => (
    <div
      className="
      text-center
      text-tachi-gray
      py-10
      opacity-60
      italic
      tracking-wide
    "
    >
      <span className="animate-pulse-glow text-tachi-teal">No active tasks detected…</span>
      <br />
      <span className="text-xs opacity-50">Awaiting operator input</span>
    </div>
  );

  return (
    <div className="space-y-4 mt-4 mb-6">
      {tasks.length === 0
        ? renderEmptyState()
        : tasks.map((task) => (
            <div key={task.id} className="animate-fadeIn">
              <TaskItem task={task} onToggle={onToggle} />
            </div>
          ))}
    </div>
  );
}

export default TaskList;
