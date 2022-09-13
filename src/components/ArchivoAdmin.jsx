import { useApoyos } from '../hooks/useApoyos';
import { useCarpetas } from '../hooks/useCarpetas';
//export const ArchivoAdmin = ({ archivo, archivos }) => { //En espera de arreglos
export const ArchivoAdmin = ({ archivo }) => {
  const { apoyos } = useApoyos();
  const { carpetas } = useCarpetas();

  const { nombre, descripcion } = archivo

  const getApoyoName = record => apoyos.filter(item => item.id === record.apoyo_id)[0].nombre
  const getCarpetaName = recordC => carpetas.filter(itemC => itemC.id === recordC.carpeta_id)[0].nombre

  return (
    <tbody className="text-gray-500	bg-gray-300 hover:bg-gray-200">
      <tr className="">
        <td className="text-center">{getApoyoName(archivo)}</td>
        <td className="text-center">{getCarpetaName(archivo)}</td>
        <td className="text-center">{nombre}</td>
        <td className="text-center">{descripcion}</td>
        <td className="text-center py-2">
          <button type="button" className="actionButtonVer">Ver</button>
          <button type="button" className="actionButtonEditar">Editar</button>
          <button type="button" className="actionButtonEliminar">Eliminar</button>
        </td>
      </tr>
    </tbody>
  )
}

export default ArchivoAdmin;