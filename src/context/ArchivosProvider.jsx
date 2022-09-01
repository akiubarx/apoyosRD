import { useState, useEffect, createContext } from 'react';
import { SiteUrl } from '../helpers/routes.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ArchivosContext = createContext();

const ArchivosProvider = ({ children }) => {//Se le pasan todos los componentes para que mande la informacion a todos

  const [archivos, setArchivos] = useState([]);
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  //Consultando los archivos
  useEffect(() => { //Siempre se efectua como Callback
    const obtenerArchivos = async () => {
      try {
        const token = sessionStorage.getItem('token')
        if (!token) return

        const config = {
          headers: {
            "Content-Type": "application/json", //Se pasa la informacion en formato json
            Authorization: `Bearer ${token}` //Se pasa la validación del checkAuth del BE
          }
        }

        const { data } = await axios(`${SiteUrl}/api/archivos/`, config) //Se para la url del backend, la data del 'submit' y la validacion del 'config'
        setArchivos(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerArchivos();
  }, [])
  //

  const mostrarAlerta = alerta => {
    setAlerta(alerta)

    setTimeout(() => {
      setAlerta({})
    }, 5000);
  }

  //Recibimos la validacion del Formulario

  const submitArchivo = async archivo => {

    //Pasamos a Resetear el Password del usuario
    try {
      const token = sessionStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json", //Se pasa la informacion en formato json
          Authorization: `Bearer ${token}` //Se pasa la validación del checkAuth del BE
        }
      }
      const { data } = await axios.post(`${SiteUrl}/api/archivos/`, archivo, config) //Se para la url del backend, la data del 'submit' y la validacion del 'config'

      //sessionStorage.setItem('token', data.token)
      setAlerta({
        msg: data.msg,
        error: false
      })

      setTimeout(() => {
        setAlerta({});
        navigate('/admin/archivos');
      }, 2500)

    } catch (error) {
      console.log(error)
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })//Accedemos al error del BE
    }

  }

  return (
    //Por medio del value mandamos los valores al .Provider // Provider siemptre requiere un Proop
    <ArchivosContext.Provider
      value={{
        archivos,
        mostrarAlerta,
        alerta,
        submitArchivo,
      }}
    >
      {children}
    </ArchivosContext.Provider>
  );
}

export { ArchivosProvider }
export default ArchivosContext;