import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <Navbar setColor={setColor}/>
      </div>
    </>
  )
}

export default App
