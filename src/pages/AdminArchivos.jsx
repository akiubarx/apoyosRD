import { React, useState } from "react";
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useArchivos } from '../hooks/useArchivos';
import { Link } from 'react-router-dom';
import { ArchivoAdmin } from '../components/ArchivoAdmin.jsx';
import { Pagination } from '../components/Pagination.jsx';

const AdminArchivos = () => {
  const { archivos } = useArchivos();
  const {currentPosts} = useState();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  

  const Posts = ({ archivos, loading }) => {
    if (loading) {
      return <h2>Cargando...</h2>;
    }
  }
  //Pagination

  return (
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Archivos</h1>
        <div className="w-full grid justify-items-end">
          <Link to="/admin/nuevo-archivo" className="actionButtonVer py-2 my-2">Nuevo Archivo</Link>
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
        <div>{archivos.length
          ?
          <>
            <table className="container table-auto border-separate border-spacing-0.5 border-slate-400">
              <thead>
                <tr className="bg-gray-800 text-zinc-50 font-normal">
                  <th className="text-center">Apoyo</th>
                  <th className="text-center">Carpeta</th>
                  <th className="text-center">Nombre</th>
                  <th className="text-center">Descripcion</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              {/* {archivos.sort((a, b) => a.id - b.id).map(archivo => ( */}
              {archivos.map(archivo => (
                <ArchivoAdmin
                  key={archivo.id}
                  archivo={archivo}
                  //archivos={archivos}
                  archivos={currentPosts}
                />
              ))}
            </table>
            <Posts/>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={archivos.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage}
            />
          </>
          :
          <p>No hay Archivos aun</p>}
        </div>

      </div>
    </>
  )
}

export default AdminArchivos;