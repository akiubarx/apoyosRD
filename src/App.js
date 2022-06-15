import  Acceso  from './components/acceso.js';
import  ButtonB  from './components/buttons.js';
import  './css/style.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Acceso></Acceso>
      <ButtonB labelButton='Acceder' className='accesButton'></ButtonB>
      <ButtonB labelButton='Registrar' className='editButton'></ButtonB>
      <ButtonB labelButton='Olvide mi contraseña' className='deleteButton'></ButtonB>
      <Button className='AccesButton'>Desde Bootstrap</Button>
    </div>
  );
}

export default App;
