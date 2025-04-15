import { getProducts } from "./showProductModel.js"
import { buildProduct, buildNoProductAdvice } from "./showProductView.js"

export async function showProductsController (container) {

  const products = await getProducts()
  drawProducts(products, container)

}

function drawProducts (products, container) {
  container.innerHTML = ''

  if (products.length === 0) {
    container.innerHTML = buildNoProductAdvice()
  }

  products.forEach((product) => {
    const productHTML = document.createElement("div")
    productHTML.innerHTML = buildProduct(product)

    container.appendChild(productHTML)
  })

}