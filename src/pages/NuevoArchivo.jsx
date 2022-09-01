import React from 'react';
import { Link } from 'react-router-dom';
import FormularioArchivos from '../components/FormularioArchivos.jsx';

const NuevoArchivo = () => {

  return (
    <>
      <div className="px-4 w-full">
        {/* <NaviBar></NaviBar> */}
        <h1 className="text-center text-5xl font-medium	my-8 text-zinc-600">Crear Nuevo Archivo</h1>
        <div className="w-full">
          <Link to="/admin/archivos" className="actionButtonVer py-2 my-2">Cancelar</Link>
        </div>
        <div className="blueLine"></div>
        <div className="flex justify-center">
          <FormularioArchivos />
        </div>
      </div>
    </>
  )
}

export default NuevoArchivo;