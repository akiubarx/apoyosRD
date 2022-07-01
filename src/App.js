import  IniciarSesion  from './layout/IniciarSesion.jsx';
import  Acceso  from './pages/Acceso.jsx';
import  Inicio  from './pages/Inicio.jsx';
import  Carpetas  from './pages/Carpetas.jsx';
import  Apoyos  from './pages/Apoyos.jsx';
import  Archivos  from './pages/Archivos.jsx';
import  Usuarios  from './pages/Usuarios.jsx';
import  Permisos  from './pages/Permisos.jsx';
import  Layout  from './layout/Layout.jsx';
import  './css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSesion />}>
          <Route index element={<Acceso/>}/>
        </Route>

        <Route path="/admin" element={<Layout />}>
          <Route index element={<Inicio/>}/>
          <Route path="Carpetas" element={<Carpetas/>}/>
          <Route path="Apoyos" element={<Apoyos/>}/>
          <Route path="Archivos" element={<Archivos/>}/>
          <Route path="Usuarios" element={<Usuarios/>}/>
          <Route path="Permisos" element={<Permisos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
