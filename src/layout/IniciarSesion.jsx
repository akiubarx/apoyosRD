import { Outlet } from 'react-router-dom';

const IniciarSesion = () => {
  return (
    <>
      <h1>Panel de Administración</h1>
      <Outlet />
    </>
  )
}

export default IniciarSesion;