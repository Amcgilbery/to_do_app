import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/tasks')
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  // Add a new task
  const handleAddTask = (name) => {
    fetch('http://127.0.0.1:8000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks((prev) => [...prev, newTask]))
      .catch(console.error);
  };

  // Toggle a task
  const handleToggle = (id) => {
    fetch(`http://127.0.0.1:8000/tasks/${id}/toggle`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((updatedTask) =>
        setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)))
      )
      .catch(console.error);
  };

  return (
    <div className="min-h-screen bg-tachi-ink relative overflow-hidden text-tachi-cyan p-6 flex items-center justify-center">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-tachi-cyan/40 overflow-hidden">
        <div className="w-1/4 h-full bg-tachi-cyan animate-hud-bar"></div>
      </div>

      <div className="max-w-3xl mx-auto mt-16 p-6 bg-tachi-panel rounded-tachi shadow-tachi-panel border border-tachi-line relative">
        <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-tachi-teal rounded-full animate-pulse-glow"></div>
        <h1 className="text-3xl font-semibold mb-8 text-tachi-cyan">Task Console</h1>

        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleToggle} />
      </div>
    </div>
  );
}
