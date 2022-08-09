import { React, useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {//Se le pasan todos los componentes para que mande la informacion a todos
  return (
    //Por medio del value mandamos los valores al .Provider // Provider siemptre requiere un Proop
    <AuthContext.Provider
      value={{

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider }
export default AuthContext;