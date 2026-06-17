import { useState } from 'react'
import Card from './components/Card';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function AddTasks() {
    const task = input.trim();
    if(task != "") {
      setTasks([...tasks, task]);
      setInput("");
    }
    console.log(tasks);
  }

  function DeleteTasks(index) {
    setTasks(tasks.filter((task,i) => i != index))
  }

  return (
    <>
      <div className='flex flex-wrap justify-center items-center h-screen w-full bg-linear-to-r from-slate-800 via-gray-900 to-gray-950'>
        <div className='flex flex-col flex-wrap w-1/3 h-130 bg-gray-800 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-cyan-300 z-10 shadow-lg shadow-black/50 p-5 duration-250 hover:shadow-2xl hover:shadow-cyan-500/40'>
          <div className='flex gap-2.5 mb-4 w-full bg-white/5 p-4 rounded-xl shadow-md shadow-black/50'>
            <label className='flex items-center text-orange-400 text-xl'>Enter the task:</label>
            <input
              type="text"
              value={input}
              placeholder='Enter the task to do'
              onChange={(e) => {setInput(e.target.value)}}
              className='flex-1 rounded-lg border border-gray-950 p-2 shadow-md shadow-black bg-gray-700 text-cyan-50 outline-none focus:ring-1 focus:ring-cyan-300 duration-300 hover:border-cyan-300'
            />
            <button onClick={AddTasks} className='cursor-pointer shadow-md shadow-black bg-cyan-500 hover:bg-cyan-400 px-3 rounded-lg active:scale-95 transition-all duration-150 font-medium hover:scale-105'>Add</button>
          </div>
          <div className='overflow-y-auto flex-1 pr-3'>
            {
              tasks.map((task, index) => (
                <Card 
                  key={index} 
                  task={task}
                  index={index}
                  deleteTask = {DeleteTasks}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
