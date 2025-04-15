
export const buildProduct = (product) => {
  let productView = `
    <p>${product.name}</p>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>${product.isPurchase}</p>
  `
  
  return productView
}

export const buildNoProductAdvice = () => {
  return '<h3> Lo siento, no hay productos que mostrar</h3>'
}