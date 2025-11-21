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
            <h1 className="text-3xl font-semibold mb-8 text-tachi-cyan">
              Task Console
            </h1>
          
          <div className="flex mb-6 gap-3">
            <input
              className="flex-1 p-3 rounded-tachi bg-tachi-layer border border-tachi-grayline text-white focus:border-tachi-teal outline-none"
              placeholder="Enter new task…"
            />
            <button className="bg-tachi-teal text-black px-4 py-2 rounded-tachi shadow-tachi-soft hover:bg-tachi-signal transition">
            Add
            </button>
          </div>
          
          <ul className="space-y-3">
            <li className="
              flex items-center justify-between
              bg-tachi-layer
              p-3 rounded-tachi 
              border border-tachi-grayline 
              hover:border-tachi-teal 
              hover:shadow-tachi-soft
              transition group
            ">
              <span className="text-white group-hover:text-tachi-teal transition">
                Sample Task 1
              </span>
              
              {/* Custom checkbox */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
              
                <div
                  className="
                    w-6 h-6
                    rounded
                    border-2 border-tachi-grayline
                    bg-tachi-layer
                    peer-checked:bg-tachi-teal
                    peer-checked:border-tachi-teal
                    transition-all duration-200
                    shadow-tachi-soft
                    relative
                  "
                >
                  <div
                    className="
                      absolute inset-0 
                      m-[5px] 
                      rounded-sm
                      bg-tachi-teal 
                      opacity-0 
                      peer-checked:opacity-100 
                      transition-opacity duration-200
                      animate-pulse-glow
                    "
                  ></div>
                </div>
              </label>
            </li>
          </ul>
        </div>
    </div>
  );
}