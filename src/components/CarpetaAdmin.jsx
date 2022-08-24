
export const CarpetaAdmin = ({carpeta, carpetas}) => {
  const { nombre, id, parent_id } = carpeta

  const getParent = record => carpetas.filter(item => item.id === record.parent_id)[0].nombre

  return (
    <tbody className="text-gray-500	bg-gray-300 hover:bg-gray-200">
      <tr className="">
        <td className="text-center">{id}</td>
        <td className="text-center">{nombre}</td>
        <td className="text-center">{parent_id}</td>
        <td className="text-center">{getParent(carpeta)}</td>
        <td className="text-center py-2">
          <button type="button" className="actionButtonVer">Ver</button>
          <button type="button" className="actionButtonEditar">Editar</button>
          <button type="button" className="actionButtonEliminar">Eliminar</button>
        </td>
      </tr>
    </tbody>
  )
}

export default CarpetaAdmin;