//Layout
import  AccesoLayout  from './layout/AccesoLayout.jsx';
import  PublicLayout  from './layout/PublicLayout.jsx';
import  AdminLayout  from './layout/AdminLayout.jsx';
//Routes Public
import  Acceso  from './pages/Acceso.jsx';
import  Inicio  from './pages/InicioPublico.jsx';
import  Carpetas  from './pages/CarpetasPublicas.jsx';
import  ConfirmarCuenta  from './pages/ConfirmarCuenta.jsx';
import  RecuperarPassword  from './pages/RecuperarPassword.jsx';
import  NuevoPassword  from './pages/NuevoPassword.jsx';
//Routes Admin
import  AdminInicio  from './pages/AdminInicio.jsx';
import  AdminCarpetas  from './pages/AdminCarpetas.jsx';
import  AdminApoyos  from './pages/AdminApoyos.jsx';
import  AdminArchivos  from './pages/AdminArchivos.jsx';
import  AdminUsuarios  from './pages/AdminUsuarios.jsx';
import  AdminPermisos  from './pages/AdminPermisos.jsx';
import  AdminCrearCuenta  from './pages/AdminCrearCuenta.jsx'
//
import  './css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { SiteUrl } from './helpers/routes.js' */
import { AuthProvider } from './context/AuthProvider.jsx'

/* console.log(SiteUrl)
console.log(process.env.REACT_APP_BACKEND_URL); */

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Inicio/>}/>   
            <Route path="Carpetas" element={<Carpetas/>}/>            
            <Route path="recuperar-password" element={<RecuperarPassword />}/>
            <Route path="recuperar-password/:token" element={<NuevoPassword />}/>
            <Route path="confirmar-cuenta/:id" element={<ConfirmarCuenta />}/>
          </Route>

          <Route path="/login" element={<AccesoLayout />}>
            <Route path="Acceso" element={<Acceso/>}/>
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminInicio/>}/>
            <Route path="Carpetas" element={<AdminCarpetas/>}/>
            <Route path="Apoyos" element={<AdminApoyos/>}/>
            <Route path="Archivos" element={<AdminArchivos/>}/>
            <Route path="Usuarios" element={<AdminUsuarios/>}/>
            <Route path="Permisos" element={<AdminPermisos/>}/>
            <Route path="Registrar" element={<AdminCrearCuenta />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
