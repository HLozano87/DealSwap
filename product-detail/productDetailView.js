
export const buildProductDetailView = (product) => {
  const date = new Date(product.updatedAt)
  let productView = `
    <div class="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 gap-6 hover:shadow-lg transition card max-w-2xl w-full">
      <h3 class="text-2xl font-bold text-emerald-800 text-center">${product.name}</h3>
      <a href="${product.picture}?html&id=${product.id}" target="_blank">
        <img src="${product.picture}" alt="${product.name}" class="w-full w-300 h-200 object-cover rounded-xl shadow-md mb-6" />
      </a>
      
      <div class="space-y-3 text-center">

        <p class="text-gray-600 text-base">${product.description}</p>
        <p class="text-gray-500 text-sm">Publicado por: <span class="font-medium">${product.user.name}</span></p>
        <p class="text-gray-500 text-sm">Fecha de publicación: ${date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p class="text-2xl font-bold text-emerald-900 mt-4">${product.price} €</p>

        <div class="grid grid-cols-1 gap-6 justify-items-center">
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

// TODO
export const buildUpdateProductButton = () => {
  const updateButton = document.createElement("button")
  updateButton.className = "bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
  updateButton.textContent = "Editar"
  return updateButton
}