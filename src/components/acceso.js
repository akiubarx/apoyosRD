import React from "react";
const Acceso = () =>{
  return(
    <div>
      <form>
        <div>
          <label>Nombre de Usuario</label>
          <input type='text' name='usr'/>
        </div>
        <div>
          <label>Constraseña</label>
          <input type='password' name='pass'/>
        </div>
      </form>
    </div>
  )
}

export default Acceso;