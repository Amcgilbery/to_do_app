import TaskList from './TaskList';
import TaskInput from './TaskInput';

export default function App() {
  return (
    <div className="min-h-screen bg-tachi-ink relative overflow-hidden text-tachi-cyan p-6 flex items-center justify-center">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-tachi-cyan/40 overflow-hidden">
        <div className="w-1/4 h-full bg-tachi-cyan animate-hud-bar"></div>
      </div>
      <div className="max-w-3xl mx-auto mt-16 p-6 bg-tachi-panel rounded-tachi shadow-tachi-panel border border-tachi-line relative">
        <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-tachi-teal rounded-full animate-pulse-glow"></div>
        <h1 className="text-3xl font-semibold mb-8 text-tachi-cyan">Task Console</h1>

        <TaskInput />

        <TaskList />
      </div>
    </div>
  );
}
