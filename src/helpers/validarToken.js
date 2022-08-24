const validateToken = async (props) => {
  const token = localStorage.getItem('token')
  if(!token) return
  const config = await {
    headers: {
      "Content-Type": "application/json", //Se pasa la informacion en formato json
      Authorization: `Bearer ${token}` //Se pasa la validación del checkAuth del BE
    }
  }
}

export { validateToken };