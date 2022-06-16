import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sistema Apoyos
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link' to='/carpetas'>Carpetas</Nav.Link>
            <Nav.Link href="#archivos">Archivos</Nav.Link>
            <Nav.Link href="#subir_archivos">Subir Archivos</Nav.Link>
            <Nav.Link href="#apoyos">Apoyos</Nav.Link>
            <Nav.Link href="#usuarios">Usuarios</Nav.Link>
            <Nav.Link href="#permisos">Permisos</Nav.Link>
            <Nav.Link href="#logout">Salir</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Layout;