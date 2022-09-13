import React from 'react';
//import { useCarpetas } from '../hooks/useCarpetas';
import { Link } from 'react-router-dom';
import FormularioApoyos from '../components/FormularioApoyos.jsx';

const NuevoApoyo = () => {
  //const { nuevoApoyo } = useApoyos();

  return (
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Crear Nuevo Apoyo</h1>
        <div className="w-full">
          <Link to="/admin/apoyos" className="actionButtonVer py-2 my-2">Cancelar</Link>
        </div>
        <div className="blueLine"></div>
        <div className="flex justify-center">
          <FormularioApoyos />
        </div>
      </div>
    </>
  )
}

export default NuevoApoyo;