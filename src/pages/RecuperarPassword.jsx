import {React, useState} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import '../css/button.css';
import { Alerta } from '../components/Alertas.jsx'
import { SiteUrl } from '../helpers/routes.js'
import axios from 'axios';

const RecuperarPassword = () => {

  const [ email, setEmail ] = useState('');//Los states cachan los datos del sitio, los leen y envian
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e=> {
    e.preventDefault();
    if ([email].includes('') || email.length < 6 ) {
      setAlerta({
        msg: 'El correo es obligatorio',
        error: true
      })
      return
    }
    //Se resetea el Alert ya que pasa las validaciones
    setAlerta({})
    try {
      const { data } = await axios.post(`${SiteUrl}/api/usuarios/missing-password`, { email })
      setAlerta({
        msg: data.msg,
        error: false
      })
      //Se limpia el state
      setEmail('');
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
      <Container className='adminDiv'>
        <Row>
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl">Recuperar Contraseña</h1>
            {/* Inicia Formulario */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='mail'>Correo</label>
              <input 
                className='w-full mt-3 p-2 border rounded-xl'
                id='mail' 
                type="email"
                placeholder="ejemplo@conafor.gob.mx"
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />
            </div>
            {/* Termina Formulario */}
            <Button className='editButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Cuenta'>Enviar Correo</Button>
            <Button className='deleteButton w-full my-2 p-2 rounded-xl' href="/" >Iniciar Sesion</Button>
            {msg && <Alerta alerta={alerta} />}
          </form>
        </Row>
      </Container>
    </>
  )
}

export default RecuperarPassword;