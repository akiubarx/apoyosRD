import  IniciarSesion  from './layout/IniciarSesion.jsx';
import  Layout  from './layout/Layout.jsx';
import  RecuperarPassword  from './pages/RecuperarPassword.jsx';
import  NuevoPassword  from './pages/NuevoPassword.jsx';
import  Acceso  from './pages/Acceso.jsx';
import  Inicio  from './pages/Inicio.jsx';
import  Carpetas  from './pages/Carpetas.jsx';
import  Apoyos  from './pages/Apoyos.jsx';
import  Archivos  from './pages/Archivos.jsx';
import  Usuarios  from './pages/Usuarios.jsx';
import  Permisos  from './pages/Permisos.jsx';
import  CrearCuenta  from './pages/CrearCuenta.jsx';
import  ConfirmarCuenta  from './pages/ConfirmarCuenta.jsx';
import  './css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

console.log(process.env.BACKEND_URL);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSesion />}>
          <Route index element={<Acceso/>}/>
          <Route path="recuperar-password" element={<RecuperarPassword />}/>
          <Route path="recuperar-password/:token" element={<NuevoPassword />}/>
          <Route path="confirmar-cuenta/:id" element={<ConfirmarCuenta />}/>
        </Route>

        <Route path="/admin" element={<Layout />}>
          <Route index path="Inicio" element={<Inicio/>}/>
          <Route path="Carpetas" element={<Carpetas/>}/>
          <Route path="Apoyos" element={<Apoyos/>}/>
          <Route path="Archivos" element={<Archivos/>}/>
          <Route path="Usuarios" element={<Usuarios/>}/>
          <Route path="Permisos" element={<Permisos/>}/>
          <Route path="Registrar" element={<CrearCuenta />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
