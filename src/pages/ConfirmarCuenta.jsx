import React from "react";
import { useLayoutEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Alerta } from '../components/Alertas.jsx';
import { Container, Row } from 'react-bootstrap';
import { SiteUrl } from '../helpers/routes.js';
const ConfirmarCuenta = () => {
  const params = useParams();
  const { id } = params;
  const [alerta, setAlerta] = useState({});
  const [ cuentaConfirmada, setcuentaConfirmada] = useState(false);
  useLayoutEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${SiteUrl}/api/usuarios/confirmar/${id}`;//Importante agregar la "/" despues de ${SiteUrl}
        const { data } = await axios(url)//si no se marca parametros en axios, por default sera GET
        setAlerta({
          msg: data.msg,
          error: false
        })
        setcuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta();
  }, [])

  const { msg } = alerta

  return (
    <>
      <Container className='adminDiv'>
        <Row>
          <h1 className="text-4xl">Confirma tu Cuenta</h1>
          <div>
            {msg && <Alerta alerta={alerta} />}
            {cuentaConfirmada &&(
              <Link className='block text-center my-5 text-slate-500 uppercase text-sm' to="/" >Iniciar Sesion</Link>
            )}
            
          </div>
        </Row>
      </Container>
    </>
  )
}

export default ConfirmarCuenta;