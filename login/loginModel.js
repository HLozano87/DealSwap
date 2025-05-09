
export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      throw new Error("No se pudo iniciar sesión.")
    }
    const { accessToken } = await response.json()

    return accessToken

  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Problema de conexión con el servidor. Intentelo de nuevo más tarde.')
    }
    throw error
  }
}