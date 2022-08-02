import { Outlet } from 'react-router-dom';

const IniciarSesion = () => {
  return (
    <>
      <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
        <div className='md:w-2/3 lg:1/2 shadow rounded-lg'>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default IniciarSesion;