import React from "react";
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../css/button.css';
const Acceso = () =>{
  return(
    <>
      <Container className='adminDiv'>
        <Row>
          <Form>
            <h1 className="text-4xl">Sistema de Carga de Apoyos</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Introduce tu usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button href="/admin" className='accesButton'>Ingresar</Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default Acceso;