
export const buildProduct = (product) => {
  const isPurchase = product.isPurchase ? 'Compra' : 'Venta'
  let productView = `
    <p>${product.name}</p>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>${isPurchase}</p>
  `
  
  return productView
}

export const buildNoProductAdvice = () => {
  return '<h3>Lo siento, no hay productos que mostrar.</h3>'
}