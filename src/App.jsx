import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Usuario } from './components/Usuario'



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
    
    <Container>
    <Usuario colunas={colunas}
        data={data}/>
        </Container>
       
       
  
  )
}

export default App
