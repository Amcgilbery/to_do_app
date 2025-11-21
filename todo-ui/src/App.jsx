import TaskList from './TaskList';
import TaskInput from './TaskInput';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 flex items-center justify-center p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="text-white text-3xl font-bold mb-6">My Tasks</h1>
          
          <div className="flex mb-6 gap-3">
            <input
              type="text"
              placeholder="Add a new task"
              className="flex-1 p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-semibold">
              Add
            </button>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
              <span className="text-white">Sample Task 1</span>
              <input type="checkbox" className="w-5 h-5 accent-purple-500" />
            </li>
            <li className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
              <span className="text-white">Sample Task 2</span>
              <input type="checkbox" className="w-5 h-5 accent-purple-500" />
            </li>
          </ul>
        </div>
    </div>
  );
}