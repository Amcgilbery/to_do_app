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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="
          flex-1
          p-3
          rounded-tachi
          bg-tachi-layer
          border border-tachi-grayline
          text-white
          focus:border-tachi-teal
          outline-none
          transition
        "
        placeholder="Enter new task…"
      />

      <button
        type="submit"
        className="
          bg-tachi-teal
          text-black
          px-4 py-2
          rounded-tachi
          shadow-tachi-soft
          hover:bg-tachi-signal
          transition
        "
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
