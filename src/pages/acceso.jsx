import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import { Alerta } from '../components/Alertas.jsx';
import { SiteUrl } from '../helpers/routes.js';
import axios from 'axios';
import { useAuth } from '../hooks/UseAuth.jsx';


const Acceso = () =>{

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const navigate = useNavigate();

  const { setAuth } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if ([username, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    //Se resetea el Alert ya que pasa las validaciones
    setAlerta({})
    //Pasamos a Resetear el Password del usuario
    try {
      const { data } = await axios.post(`${SiteUrl}/api/usuarios/login/`, { username, password })
      //localStorage.setItem('token', data.token)
      sessionStorage.setItem('token', data.token)
      setAlerta({
        msg: data.msg,
        error: false
      })
      //Se limpia el state
      setUsername('');
      setPassword('');
      setAuth(data);
      navigate('/admin', {replace:true});
    } catch (error) {
      console.log(error)
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })//Accedemos al error del BE
    }
  }

  //

  const { msg } = alerta;

  return(
    <>
      <Container className='adminDiv'>
        <Row>
          <h1 className="text-4xl">Sistema de Carga de Apoyos</h1>
          <form onSubmit={handleSubmit}>
            {/* Inicia Formulario */}
            <div className='my-2'>
              <label className='uppercase block' htmlFor='usuario'>Usuario</label>
              <input
                className='w-full mt-3 p-2 border rounded-xl'
                id='username'
                type="text"
                placeholder="Introduce tu usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='my-2'>
              <label className='uppercase block' htmlFor='password'>Contraseña</label>
              <input
                className='w-full mt-3 p-2 border rounded-xl'
                id='password'
                type="password"
                placeholder="Escribe tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {/* Termina Formulario */}
            <Button className='accesButton w-full my-2 p-2 rounded-xl' type='submit' value='Iniciar Sesión'>Ingresar</Button>
            <Button className='actionButtonEditar w-full my-2 p-2 rounded-xl' href='/recuperar-password'>Recuperar Contraseña</Button>
          </form>
          <div>
            {msg && <Alerta alerta={alerta} />}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Acceso;