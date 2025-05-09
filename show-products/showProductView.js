
export const buildProduct = (product) => {
  let productView = `
    <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-3 hover:shadow-lg transition">
      <a href="/templates/product-detail.html?id=${product.id}">
        <h3 class="text-lg text-center font-semibold text-emerald-800">${product.name}</h3>
      </a>
      <img src="${product.picture}" alt="${product.name}" class="w-full h-50 object-cover rounded-lg mb-4" />
      <p class="text-gray-600 text-center text-sm py-1">${product.description}</p>
      <p class="text-emerald-900 text-center font-bold">${product.price} €</p>
      <span class="inline-flex justify-center items-center px-2 py-1 text-xs font-medium rounded-full
        ${product.type === 'Compra'
          ? 'bg-emerald-200 text-emerald-800 mx-auto py-[0.4rem] px-12 shadow-lg'
          : 'bg-blue-200 text-blue-800 mx-auto py-[0.4rem] px-12 shadow-lg'}">
        ${product.type}
      </span>
    </div>
  `
  return productView
}

export const buildNoProductAdvice = () => {
  return '<h3 class="block text-lg italic font-medium text-gray-700">Lo siento, no hay productos que mostrar.</h3>'
}