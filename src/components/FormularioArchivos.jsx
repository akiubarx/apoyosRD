import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alerta } from '../components/Alertas.jsx';
import useArchivos from '../hooks/useArchivos.jsx';
import useCarpetas from '../hooks/useCarpetas.jsx';

const FormularioArchivos = () => {

  const { carpetas } = useCarpetas();

  const [nombre, setNombre] = useState('');
  const [apoyo_id, setApoyoId] = useState('');
  const [carpeta_id, setCarpetaId] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha_publicacion, setFechaPublicacion] = useState('');

  const { mostrarAlerta, alerta, submitArchivo } = useArchivos();

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if ([nombre, descripcion].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    //Pasamos todo ahora al Provider ArchivosProvider
    await submitArchivo({ nombre, apoyo_id, carpeta_id, descripcion, fecha_publicacion });
    //Se limpia el state
    setNombre('');
    setApoyoId('');
    setCarpetaId('');
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
        <label className='uppercase block' htmlFor='nombre'>Nombre del Archivo</label>
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
        <label className='uppercase block' htmlFor='apoyo_id'>Apoyo</label>
        <select 
          className='w-full mt-3 p-2 border rounded-xl'
          id='apoyo_id'
          value={apoyo_id}
          onChange={e => setApoyoId(e.target.value)}
        >
          <option value={"valor Null"}> Selecciona un Apoyo </option>
          <option value={"valor 1"}> 1 </option>
          <option value={"valor 2"}> 2 </option>
          <option value={"valor 3"}> 3 </option>
          <option value={"valor 4"}> 4 </option>
          <option value={"valor 5"}> 5 </option>

        </select>
        <input
          className='w-full mt-3 p-2 border rounded-xl'
          id='apoyo_id'
          type="select"
          disabled
          value={apoyo_id}
          onChange={e => setApoyoId(e.target.value)}
        />
      </div>

      <div className='my-2'>
        <label className='uppercase block' htmlFor='carpeta_id'>Carpeta</label>
        <select
          className='w-full mt-3 p-2 border rounded-xl'
          id='carpeta_id'
          value={carpeta_id}
          onChange={e => setCarpetaId(e.target.value)}
        >
          <option> Selecciona una Carpeta </option>
          {carpetas.map(carpeta =><option key={carpeta.nombre} value={carpeta.id}>{carpeta.nombre}</option>)}
        </select>
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