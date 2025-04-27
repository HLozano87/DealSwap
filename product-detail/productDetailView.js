
export const buildProductDetailView = (product) => {
  const date = new Date(product.updatedAt)
  let productView = `
    <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-3 hover:shadow-lg transition card">
      <img src="${product.picture}" alt="${product.name}" class="w-full h-64 object-cover rounded-xl shadow-md mb-6" />
      <div class="space-y-3 text-center">
        <a href="/templates/product-detail.html?id=${product.id}">
          <h3 class="text-2xl font-bold text-emerald-800">${product.name}</h3>
        </a>
        <p class="text-gray-600 text-base">${product.description}</p>
        <p class="text-gray-500 text-sm">Publicado por: <span class="font-medium">${product.user.name}</span></p>
        <p class="text-gray-500 text-sm">Fecha de publicación: ${date.toLocaleDateString()}</p>
        <p class="text-2xl font-bold text-gray-900 mt-4">${product.price} €</p>

        <div class="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 mt-6">
          <span class="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold rounded-full
            ${product.type === 'Compra'
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-blue-100 text-blue-800'}
          ">
            ${product.type}
          </span>
        </div>
      </div>    
    </div>
  `
  return productView
}

export const buildRemoveProductButton = () => {
  const removeButton = document.createElement("button")
  removeButton.className = "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
  removeButton.textContent = "Borrar"
  return removeButton
}
