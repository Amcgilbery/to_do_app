import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="flex gap-3 mb-6">
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          placeholder="Add a new task..."
        />
      </form>
    </div>
  );
}

export default TaskInput;
