import {React, useState} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import '../css/button.css';
const RecuperarPassword = () => {

  const [ email, setEmail ] = useState('');//Los states cachan los datos del sitio, los leen y envian

  return (
    <>
      <Container className='adminDiv'>
        <Row>
          <form>
            <h1 className="text-4xl">Recuperar Contraseña</h1>
            {/* Inicia Formulario */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='mail'>Correo</label>
              <input className='w-full mt-3 p-2 border rounded-xl' id='mail' type="email" placeholder="ejemplo@conafor.gob.mx" />
            </div>
            {/* Termina Formulario */}
            <Button className='editButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Cuenta'>Enviar Correo</Button>
            <Button className='deleteButton w-full my-2 p-2 rounded-xl' href="/" >Iniciar Sesion</Button>
          </form>
        </Row>
      </Container>
    </>
  )
}

export default RecuperarPassword;