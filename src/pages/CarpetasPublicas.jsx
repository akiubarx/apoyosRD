import React from 'react';
import { Container, Table, Navbar, Form, FormControl, Button } from 'react-bootstrap';
/* import NaviBar from '../components/naviBar.jsx'; */

const Carpetas = () => {
  return (
    <div className="px-4">
      {/* <NaviBar></NaviBar> */}
      <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Carpetas</h1>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="grid grid-cols-12 gap-2 w-full">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2 col-span-11"
                aria-label="Search"
              />
              <Button variant="outline-success" className="col-end-13">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="blueLine"></div>
      <Table striped bordered hover variant="dark" className="table-fixed">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">ID Sup</th>
            <th className="text-center">Carpeta Superior</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td className="text-center">1</td>
            <td>Programa Manejo Forestal No Maderable</td>
            <td className="text-center">4</td>
            <td>Anexos</td>
            <td>
              <button type="button" className="actionButtonVer">Ver</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Carpetas;