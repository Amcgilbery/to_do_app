import { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Buy groceries', completed: false },
    { id: 2, name: 'Finish project', completed: false },
    { id: 3, name: 'Go for a run', completed: true },
  ]);

  // Function to toggle task completion status
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-4 mb-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </div>
  );
}

export default TaskList;