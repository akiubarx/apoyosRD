import { React, useState } from 'react'
import { Button } from 'react-bootstrap';
import '../css/button.css';
import { Alerta } from '../components/Alertas.jsx'
import axios from 'axios';

const Acceso = () => {
  /* Se agregan los states para la comunicacion con la API */
  const [ username, setNombre ] = useState('')
  const [ email, setCorreo ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if([username, email, password, repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: 'Las contraseñas son diferentes',
        error: true
      })
      return
    }

    if (password.length < 6) {
      setAlerta({
        msg: 'La contraseñas es muy corta',
        error: true
      })
      return
    }
    //Se resetea el Alert ya que pasa las validaciones
    setAlerta({})
    //Pasamos a crear usuario en la API
    try {
      const { data } = await axios.post('http://localhost:4000/api/usuarios', {username, email, password})
      setAlerta({
        msg: data.msg,
        error: false
      })

      setNombre('');
      setCorreo('');
      setPassword('');
      setRepetirPassword('');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })//Accedemos al error del BE
    }
  }

  const { msg } = alerta

  return (
    <>
      <div className='adminDiv'>
        <div className='container mx-auto mt-1 md:mt-20 p-2 md:flex md:justify-center'>
          <form className='md:w-4/5 lg:1/2 p-3 shadow rounded-lg' onSubmit={handleSubmit}>
            <h1 className="text-4xl">Crear Cuenta</h1>
            {/* Inicia Formulario */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='usuario'>Nombre de Usuario</label>
              <input 
                className='w-full mt-3 p-2 border rounded-xl' 
                id='usuario' 
                type='text' 
                placeholder='Introduce tu usuario'
                value={username}
                onChange={e => setNombre(e.target.value)}
              />
            </div>
            {/* Separador */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='mail'>Correo</label>
              <input 
                className='w-full mt-3 p-2 border rounded-xl' 
                id='mail' 
                type='email'
                placeholder='ejemplo@conafor.gob.mx'
                value={email}
                onChange={e => setCorreo(e.target.value)}
              />
            </div>
            {/* Separador */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='password'>Contraseña</label>
              <input 
                className='w-full mt-3 p-2 border rounded-xl' 
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {/* Separador */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='repeat-password'>Repetir Contraseña</label>
              <input
                className='w-full mt-3 p-2 border rounded-xl'
                id='repeat-password'
                type='password'
                placeholder='Password'
                value={repetirPassword}
                onChange={e => setRepetirPassword(e.target.value)}
              />
            </div>
            {/* Termina Formulario */}
            {msg && <Alerta alerta={alerta} />}
            <input className='editButton w-full my-2 p-2 rounded-xl'  type='submit' value='Crear Cuenta'/>
            <Button className='deleteButton w-full my-2 p-2 rounded-xl'  href="/recuperar-password" >Cancelar</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Acceso;