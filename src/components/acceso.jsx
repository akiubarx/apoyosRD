import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Acceso = () =>{
  return(
    <Container className='adminDiv'>
      <Row>
        <Form>
          <h1>Sistema de Carga de Apoyos</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className='AccesButton'>Ingresar</Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Acceso;