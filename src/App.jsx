import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Usuario } from './components/Usuario'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Menu } from './Components/Menu'


function App() {

  const colunas = ['id', 'name', 'email', 'username', 'website', 'address']
  const [data, setData] = useState([])

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
       
    <>
    <Container>
    <Menu/>
    <Outlet/>
    <Footer/>
    </>
   

  )
}

export default App
