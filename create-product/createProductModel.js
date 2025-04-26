
export const createProduct = async (productName, productDescription, productPrice, productType, productPicture) => {

  const token = localStorage.getItem('token')

  try {
    const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    body: JSON.stringify({
      name: productName, 
      description: productDescription,
      price: productPrice,
      type: productType,
      picture: productPicture
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  if(!response.ok) {
    const data = await response.json()
    const errorMessage = data.error || 'No se pudo crear el producto.'
    throw new Error(errorMessage)
  }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Problema de conexión con el servidor. Intentelo de nuevo más tarde.')
    }
    throw error
  }
  
}