export const getProductDetail = async (productId) => {

  const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`)

  if(!response.ok) {
    throw new Error('Producto no disponible.')
  }
  const productDetail = await response.json()
  return productDetail
}

export const productRemove = async (productId) => {
  const token = localStorage.getItem('token')

  if (!token) {
    throw new Error('No se encuentra el token.')
  }
  const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  if (response.ok) {
    setTimeout(() => {
      window.location = '/'
    }, 2000);
  } else {
    throw new Error('Producto no disponible.')
  }
}

export const getLoggedUserInfo = async () => {
  const token = localStorage.getItem('token')

  if (!token) {
    throw new Error('No se encuentra el token.')
  }

  const response = await fetch('http://localhost:8000/auth/me', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  if(!response.ok) {
    throw new Error('El usuario no existe.')
  }

  const user = await response.json()
  return user

}