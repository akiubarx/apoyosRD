import React from 'react';
//import { useCarpetas } from '../hooks/useCarpetas';
import { Link } from 'react-router-dom';
import FormularioCarpetas from '../components/FormularioCarpetas.jsx';

const NuevaCarpeta = () => {
  //const { nuevaCarpeta } = useCarpetas();

  return (
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Crear Nueva Carpeta</h1>
        <div className="w-full">
          <Link to="/admin/carpetas" className="actionButtonVer py-2 my-2">Cancelar</Link>
        </div>
        <div className="blueLine"></div>
        <div className="flex justify-center">
          <FormularioCarpetas/>
        </div>
      </div>
    </>
  )
}

export default NuevaCarpeta;