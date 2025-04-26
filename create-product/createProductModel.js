
export const createProduct = async (productName, productDescription, productPrice, productType, productPicture) => {

  const token = localStorage.getItem('token')

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
    const data = response.json()
    throw new Error('No se pudo crear el producto.')
  }

}