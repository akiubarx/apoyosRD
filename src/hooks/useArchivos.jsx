import { useContext } from 'react';
import { ArchivosContext } from '../context/ArchivosProvider.jsx';

export const useArchivos = () => {
  return useContext(ArchivosContext)//Se indica que use los valores que extrae de AuthProvider.jsx
}

export default useArchivos;