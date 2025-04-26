
export const buildProduct = (product) => {
  let productView = `
    <div class="p-4 space-y-2">
    <a href="card.html?id=${product.id}">
      <h3 class="text-lg font-semibold text-emerald-800">${product.name}</h3>
    </a>
    <p class="text-gray-600 text-sm">${product.description}</p>
    <p class="text-gray-900 font-bold">${product.price} €</p>
    <span class="inline-block px-2 py-1 text-xs font-medium rounded-full ${product.type === 'Compra'
      ? 'bg-emerald-100 text-emerald-800'
      : 'bg-blue-100 text-blue-800'
    }">
      ${product.type}
    </span>
  </div>
  `
  return productView
}

export const buildNoProductAdvice = () => {
  return '<h3 class="block text-lg italic font-medium text-gray-700">Lo siento, no hay productos que mostrar.</h3>'
}