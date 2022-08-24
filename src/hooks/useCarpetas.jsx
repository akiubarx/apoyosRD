import { useContext } from 'react';
import { CarpetasContext } from '../context/CarpetasProvider.jsx';

export const useCarpetas = () => {
  return useContext(CarpetasContext)//Se indica que use los valores que extrae de AuthProvider.jsx
}

export default useCarpetas;