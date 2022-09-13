import { useContext } from 'react';
import { ApoyosContext } from '../context/ApoyosProvider.jsx';

export const useApoyos = () => {
  return useContext(ApoyosContext)//Se indica que use los valores que extrae de AuthProvider.jsx
}

export default useApoyos;