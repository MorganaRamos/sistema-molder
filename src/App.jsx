import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Carrrosel } from './Components/Carrrosel'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu/>
    <Carrrosel/>
    <Outlet/>
    <Footer/>
    </>
   
  )
}

export default App
