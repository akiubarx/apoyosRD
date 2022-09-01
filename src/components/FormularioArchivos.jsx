import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alerta } from '../components/Alertas.jsx';
import useArchivos from '../hooks/useArchivos.jsx';

const FormularioArchivos = () => {

  const [nombre, setNombre] = useState('');
  const [parent_id, setParentId] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha_publicacion, setFechaPublicacion] = useState('');

  const { mostrarAlerta, alerta, submitArchivo } = useArchivos();

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if ([nombre, parent_id, descripcion].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    //Pasamos todo ahora al Provider ArchivosProvider
    await submitArchivo({ nombre, parent_id, descripcion, fecha_publicacion });
    //Se limpia el state
    setNombre('');
    setParentId('');
    setDescripcion('');
    setFechaPublicacion('');

  }

  //

  const { msg } = alerta;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-100 py-10 px-5 md:w-3/4 rounded-lg shadow">
      <div className='my-2'>
        <label className='uppercase block' htmlFor='nombre'>Apoyo</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='nombre'
          type="text"
          placeholder="Introduce el Nombre de la Carpeta"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='parent_id'>Carpeta</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='parent_id'
          type="number"
          placeholder="Introduce un Id de Nivel Superior"
          value={parent_id}
          onChange={e => setParentId(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='descripcion'>Descripción</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='descripcion'
          type="number"
          placeholder=""
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='fecha_publicacion'>Fecha de Publicación</label>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='fecha_publicacion'
          type="date"
          placeholder="Introduce un Id de Nivel Superior"
          value={fecha_publicacion}
          onChange={e => setFechaPublicacion(e.target.value)}
        />
      </div>


      {/* Termina Formulario */}
      <Button className='accesButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Carpeta'>Crear Archivo</Button>
      <Link to='/admin/archivos'><Button className='actionButtonEditar w-full my-2 p-2 rounded-xl'>Cancelar</Button></Link>

      <div>
        {msg && <Alerta alerta={alerta} />}
      </div>

    </form>
  )
}

export default FormularioArchivos