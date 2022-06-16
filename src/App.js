import  Acceso  from './components/acceso.jsx';
import  NaviBar  from './components/naviBar.jsx';
import  './css/style.css';
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
