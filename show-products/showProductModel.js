
export async function getProducts() {
  let products = []
  try {
    const response = await fetch('http://localhost:8000/api/products')
    products = await response.json()
  } catch (error) {
    throw new Error('No se ha podido obtener los productos. Intentalo más tarde.')
  }
  return products
}