import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alerta } from '../components/Alertas.jsx';
import useApoyos from '../hooks/useApoyos.jsx';

const FormularioApoyos = () => {

  const [nombre, setNombre] = useState('');
  const [anio, setAnio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [creacion, setCreacion] = useState('');

  const { mostrarAlerta, alerta, submitApoyo } = useApoyos();

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if ([nombre, anio, descripcion].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    //Pasamos todo ahora al Provider ApoyosProvider
    await submitApoyo({ nombre, anio, descripcion, creacion });
    //Se limpia el state
    setNombre('');
    setAnio('')
    setDescripcion('');
    setCreacion('');

  }

  //

  const { msg } = alerta;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-100 py-10 px-5 md:w-3/4 rounded-lg shadow">
      <div className='my-2'>
        <label className='uppercase block' htmlFor='nombre'>Nombre del Apoyo</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='nombre'
          type="text"
          placeholder="Introduce el Nombre del Apoyo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='anio'>Año</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          type='text'
          placeholder=''
          id='anio'
          value={anio}
          onChange={e => setAnio(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='descripcion'>Descripción</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='descripcion'
          type="text"
          placeholder=""
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='creacion'>Fecha de Publicación</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='creacion'
          type="date"
          placeholder="Introduce un Id de Nivel Superior"
          value={creacion}
          onChange={e => setCreacion(e.target.value)}
        />
      </div>


      {/* Termina Formulario */}
      <Button className='accesButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Apoyo'>Crear Apoyo</Button>
      <Link to='/admin/archivos'><Button className='actionButtonEditar w-full my-2 p-2 rounded-xl'>Cancelar</Button></Link>

      <div>
        {msg && <Alerta alerta={alerta} />}
      </div>

    </form>
  )
}

export default FormularioApoyos;