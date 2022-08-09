import '../css/button.css';
import { React, useState, useEffect } from "react";
import { Container, Row, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { Alerta } from '../components/Alertas.jsx'
import { SiteUrl } from '../helpers/routes.js'
import axios from 'axios';

const NuevoPassword = () => {

  const [ tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')

  const params = useParams();
  const { token } = params;
  const [passwordModificado, setPasswordModificado] = useState(false);

  useEffect(() => {
    const comporbarToken = async () => {
      try {
        await axios(`${SiteUrl}/api/usuarios/missing-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })//Accedemos al error del BE
      }
    }
    comporbarToken();
  }, [])

  /////////

  const handleSubmit = async e => {
    e.preventDefault();
    //validamos que todos los campos tengan contenido
    if ([password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'El campo es obligatorio',
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

    if (password !== repetirPassword) {
      setAlerta({
        msg: 'Las contraseñas son diferentes',
        error: true
      })
      return
    }
    //Se resetea el Alert ya que pasa las validaciones
    setAlerta({})
    //Pasamos a Resetear el Password del usuario
    try {
      const { data } = await axios.post(`${SiteUrl}/api/usuarios/missing-password/${token}`, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })
      //Se limpia el state
      setPassword('');
      setRepetirPassword('');
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })//Accedemos al error del BE
    }
  }

  const { msg } = alerta;

  return (
    <>
      <Container className='adminDiv'>
        <Row>
          <h1 className="text-4xl">Restablece tu Contraseña</h1>
          { tokenValido && (
            <form onSubmit={handleSubmit}>
              {/* Inicia Formulario */}
              <div className='my-2'>
                <label className='uppercase block' htmlFor='password'>Nueva Contraseña</label>
                <input 
                  className='w-full mt-3 p-2 border rounded-xl' 
                  id='password' 
                  type="password" 
                  placeholder="Escribe tu nueva contraseña"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className='my-2'>
                <label className='uppercase block' htmlFor='repeat-password'>Repetir Contraseña</label>
                <input 
                  className='w-full mt-3 p-2 border rounded-xl' 
                  id='repeat-password' 
                  type="password" 
                  placeholder="Repite la contraseña"
                  value={repetirPassword}
                  onChange={e => setRepetirPassword(e.target.value)}
                />
              </div>
              {/* Termina Formulario */}
              <Button className='editButton w-full my-2 p-2 rounded-xl' type='submit' value='Crear Cuenta'>Guardar nueva contraseña</Button>
            </form>
          )}

          <div>
            {msg && <Alerta alerta={alerta} />}
            {passwordModificado && (
              <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/" >Iniciar Sesion</Link>
            )}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default NuevoPassword;