import { React, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';

export const UseAuth = () => {
  return useContext(AuthContext)//Se indica que use los valores que extrae de AuthProvider.jsx
}

export default UseAuth;