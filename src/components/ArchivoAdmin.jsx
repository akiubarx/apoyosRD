//export const ArchivoAdmin = ({ archivo, archivos }) => { //En espera de arreglos
export const ArchivoAdmin = ({ archivo }) => {
  const { nombre, apoyo_id, carpeta_id, descripcion, id } = archivo

  //const getParent = record => archivos.filter(item => item.id === record.parent_id)[0].nombre

  return (
    <tbody className="text-gray-500	bg-gray-300 hover:bg-gray-200">
      <tr className="">
        <td className="text-center">{apoyo_id} = Nombre Apoyo</td>
        <td className="text-center">{carpeta_id} = Nombre Carpeta</td>
        <td className="text-center">{id} {nombre}</td>
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