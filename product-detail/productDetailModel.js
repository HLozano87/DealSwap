export const productDetailModel = async (productId) => {

  const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`)

  if(!response.ok) {
    throw new Error('Producto no disponible.')
  }
  const productDetail = await response.json()
  return productDetail
}