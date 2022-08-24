import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';

export const useAuth = () => {
  return useContext(AuthContext)//Se indica que use los valores que extrae de AuthProvider.jsx
}

export default useAuth;