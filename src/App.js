import  Acceso  from './components/acceso.jsx';
import  NaviBar  from './components/naviBar.jsx';
import  ButtonB  from './components/buttons.js';
import  './css/style.css';
import { Button } from 'react-bootstrap';
import Carpetas from "./pages/carpetas";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NaviBar></NaviBar>
      <Outlet></Outlet>
      <Acceso></Acceso>
    </div>
  );
}

export default App;
