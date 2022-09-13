import React from "react";
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useApoyos } from '../hooks/useApoyos';
import { Link } from 'react-router-dom';
import { ApoyoAdmin } from '../components/ApoyoAdmin.jsx';

const AdminApoyos = () => {
  const { apoyos } = useApoyos();

  return (
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Apoyos</h1>
        <div className="w-full grid justify-items-end">
          <Link to="/admin/nuevo-apoyo" className="actionButtonVer py-2 my-2">Nuevo Apoyo</Link>
        </div>
        <Navbar bg="light" expand="lg" className="my-2">
          <Container>
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
        <div>{apoyos.length
          ?
          <table className="container table-auto border-separate border-spacing-0.5 border-slate-400">
            <thead>
              <tr className="bg-gray-800 text-zinc-50 font-normal">
                <th className="text-center">Id</th>
                <th className="text-center">Nombre del Apoyo</th>
                <th className="text-center">Descripcion</th>
                <th className="text-center">Año</th>
                <th className="text-center">Creador</th>                
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            {/* {apoyos.sort((a, b) => a.id - b.id).map(apoyo => ( */}
            {apoyos.map(apoyo => (
              <ApoyoAdmin
                key={apoyo.id}
                apoyo={apoyo}
              //apoyos={aapoyos}
              />
            ))}
          </table>
          :
          <p>No hay Apoyos aun</p>}
        </div>

      </div>
    </>
  )
}

export default AdminApoyos;