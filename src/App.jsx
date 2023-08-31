import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu'


function App()  {

  return (

    <>
   <Container>
    <Menu/>
    <Outlet/>
    <Footer/>
   </Container>
   
    </>
   

  )
}

export default App
