import { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Buy groceries', completed: false },
    { id: 2, name: 'Finish project', completed: false },
    { id: 3, name: 'Go for a run', completed: true },
  ]);

  // Toggle completion
  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  // Show this if no tasks exist
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
            <div
              key={task.id}
              className="animate-fadeIn" // Custom animation below
            >
              <TaskItem task={task} onToggle={handleToggle} />
            </div>
          ))}
    </div>
  );
}

export default TaskList;
