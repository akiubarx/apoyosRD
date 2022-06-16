import  IniciarSesion  from './layout/IniciarSesion.jsx';
import  Acceso  from './pages/acceso.jsx';
import  Carpetas  from './pages/carpetas.jsx';
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
        {/*  */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Carpetas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
