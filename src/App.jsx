
import './App.css'
import Carrusel from './models/Carrusel'
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div className='w-full h-screen items-center flex justify-center '>
      <Routes>
        <Route path="/" element={<Carrusel />} />
      </Routes>
      
      

    </div>
  )
}

export default App
