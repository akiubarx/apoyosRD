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
import  NuevaCarpeta  from './pages/NuevaCarpeta.jsx';
import  AdminApoyos  from './pages/AdminApoyos.jsx';
import  NuevoApoyo  from './pages/NuevoApoyo.jsx';
import  AdminArchivos  from './pages/AdminArchivos.jsx';
import  NuevoArchivo  from './pages/NuevoArchivo.jsx';
import  AdminUsuarios  from './pages/AdminUsuarios.jsx';
import  AdminPermisos  from './pages/AdminPermisos.jsx';
import  AdminCrearCuenta  from './pages/AdminCrearCuenta.jsx';
//
import  './css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { SiteUrl } from './helpers/routes.js' */
import { AuthProvider } from './context/AuthProvider.jsx'
import { ApoyosProvider } from './context/ApoyosProvider.jsx'
import { CarpetasProvider } from './context/CarpetasProvider.jsx'
import { ArchivosProvider } from './context/ArchivosProvider.jsx'
//import { GlobalProvider } from './context/GlobalProvider.jsx'

/* console.log(SiteUrl)
console.log(process.env.REACT_APP_BACKEND_URL); */

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApoyosProvider>
          <CarpetasProvider>
            <ArchivosProvider>
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
                  <Route path="nueva-carpeta" element={<NuevaCarpeta/>}/>
                  <Route path="Apoyos" element={<AdminApoyos/>}/>
                  <Route path="nuevo-apoyo" element={<NuevoApoyo/>}/>
                  <Route path="Archivos" element={<AdminArchivos/>}/>
                  <Route path="nuevo-archivo" element={<NuevoArchivo/>}/>
                  <Route path="Usuarios" element={<AdminUsuarios/>}/>
                  <Route path="Permisos" element={<AdminPermisos/>}/>
                  <Route path="Registrar" element={<AdminCrearCuenta />}/>
                </Route>
              </Routes>
            </ArchivosProvider>
          </CarpetasProvider>
        </ApoyosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
