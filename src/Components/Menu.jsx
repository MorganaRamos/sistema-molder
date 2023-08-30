import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


export const Menu = () => {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/home">Molder System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/cadastro">Cadastro</Nav.Link>
          <Nav.Link href="/usuario">Usuarios</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    </>
  )
}
