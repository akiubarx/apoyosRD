import React from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/button.css';
import { Alerta } from '../components/Alertas.jsx'
const Acceso = () => {
  /* Se agregan los states para la comunicacion con la API */
  const [ nombre, setNombre ] = useState('')
  const [ correo, setCorreo ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit = e => {
    e.preventDeafult();
    //validamos que todos los campos tengan contenido
    if([nombre, correo, password, repetirPassword].includes('')){
      /* setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      }) */
      console.log('Todos los campos son Obligatorios')
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
              <label className='uppercase block' htmlFor='usuario'>Nombre de Usuaio</label>
              <input 
                className='w-full mt-3 p-2 border rounded-xl' 
                id='usuario' 
                type='email' 
                placeholder='Introduce tu usuario'
                value={nombre}
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
                value={correo}
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
            <input className='editButton w-full my-2 p-2 rounded-xl'  type='submit' value='Crear Cuenta'/>
            <Link className='deleteButton w-full my-2 p-2 rounded-xl'  to="/recuperar-password" >Cancelar</Link>

            {msg && <Alerta alerta={alerta}/>}

          </form>
        </div>
      </div>
    </>
  )
}

export default Acceso;