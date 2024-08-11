
import './App.css'
import Carrusel from './components/Carrusel'
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <main className='w-full h-screen '>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      
      

    </main>
  )
}

export default App
