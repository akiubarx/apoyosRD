import React from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../css/button.css';
const Acceso = () => {
  return (
    <>
      <Container className='adminDiv'>
        <Row>
          <form>
            <h1 className="text-4xl">Restablece tu Contraseña</h1>
            {/* Inicia Formulario */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='password'>Nueva Contraseña</label>
              <input className='w-full mt-3 p-2 border rounded-xl' id='password' type="password" placeholder="Escribe tu nueva contraseña" />
            </div>

            <div className='my-2'>
              <label className='uppercase block' htmlFor='repeat-password'>Repetir Contraseña</label>
              <input className='w-full mt-3 p-2 border rounded-xl' id='repeat-password' type="password" placeholder="Repite la contraseña" />
            </div>
            {/* Termina Formulario */}
            <Button className='editButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Cuenta'>Guardar nueva contraseña</Button>
          </form>
        </Row>
      </Container>
    </>
  )
}

export default Acceso;