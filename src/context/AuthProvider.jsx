import { useState, useEffect, createContext } from 'react';
import { SiteUrl } from '../helpers/routes.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {//Se le pasan todos los componentes para que mande la informacion a todos
  
  const [auth, setAuth] = useState({}) //Alacenamos los valor que se obtienen en el inicio de sesion
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = sessionStorage.getItem('token')
      if(!token){
        setCargando(false); //Con esto mandamos al Login
        return;
      }

      const config = {
        headers:{
          "Content-Type": "application/json", //Se debe cuidar la escritura correcta
          Authorization: `Bearer ${token}` //Se pasa la validación del checkAuth del BE
        }
      }

      try {
        const {data} = await axios(`${SiteUrl}/api/usuarios/perfil`, config)
        setAuth(data)
        navigate('/admin')//Revisar este navigate
      } catch (error) {
        setAuth({})
      }
      setCargando(false);//Cambia el State para que lea en este momento los datos y no de un error de ejecucion

    }
    autenticarUsuario();
  }, [])

  return (
    //Por medio del value mandamos los valores al .Provider // Provider siemptre requiere un Proop
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider }
export default AuthContext;