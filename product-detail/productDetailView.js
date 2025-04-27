
export const buildProductDetailView = (product) => {
  const date = new Date(product.updatedAt)
  let productView = `
    <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-3 hover:shadow-lg transition">
      <img src="${product.picture}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg mb-4" />
      <a href="/templates/product-detail.html?id=${product.id}">
        <h3 class="text-lg font-semibold text-emerald-800">${product.name}</h3>
      </a>
      <p class="text-gray-600 text-sm">${product.description}</p>
      <p class="text-gray-600 text-sm">${product.user.name} ${date.toLocaleDateString()}</p>
      <p class="text-gray-900 font-bold">${product.price} €</p>
      <span class="inline-flex justify-center items-center px-2 py-1 text-xs font-medium rounded-full
        ${product.type === 'Compra'
      ? 'bg-emerald-100 text-emerald-800'
      : 'bg-blue-100 text-blue-800'}">
        ${product.type}
      </span>
    </div>
  `
  return productView
}