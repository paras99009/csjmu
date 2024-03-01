import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import JoinUs from './components/JoinUs'
import About from './components/About'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route   path='/join-us' element={<JoinUs/>} />
        <Route  path='services' element={<Services/>} />
      </Routes>


    </div>


    </>
  )
}

export default App
