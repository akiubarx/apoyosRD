import React from 'react';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useCarpetas } from '../hooks/useCarpetas';
import { Link } from 'react-router-dom';
import { CarpetaAdmin } from '../components/CarpetaAdmin.jsx';


const AdminCarpetas = () =>{
  const { carpetas } = useCarpetas();
  
  return(
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Carpetas</h1>
        <div className="w-full grid justify-items-end">
          <Link to="/admin/nueva-carpeta" className="actionButtonVer py-2 my-2">Nueva Carpeta</Link>
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
        <div>{carpetas.length 
          ? 
            <table className="container table-auto border-separate border-spacing-0.5 border-slate-400">
              <thead>
                <tr className="bg-gray-800 text-zinc-50 font-normal">
                  <th className="text-center">ID</th>
                  <th className="text-center">Nombre</th>
                  <th className="text-center">ID Sup</th>
                  <th className="text-center">Carpeta Superior</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              {carpetas.map(carpeta => (
                <CarpetaAdmin
                  key={carpeta.id}
                  carpeta={carpeta}
                  carpetas={carpetas}
                />
              ))}
            </table>
          : 
          <p>No hay Carpetas aun</p>}
        </div>
        
      </div>
    </>
  )
}

export default AdminCarpetas;