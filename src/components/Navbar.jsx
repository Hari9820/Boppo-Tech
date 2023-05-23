import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to="/">Add User</Nav.Link>
        <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Appbar