import { getProducts } from "./showProductModel.js"
import { buildProduct, buildNoProductAdvice } from "./showProductView.js"

export async function showProductsController (container) {

  try {
    const event = new CustomEvent("load-products-started")
    container.dispatchEvent(event)
    const products = await getProducts()
    drawProducts(products, container)

  } catch (error) {
    const event = new CustomEvent("load-products-error", {
      detail: error.message
    })
    container.dispatchEvent(event)
  } finally {
    const event = new CustomEvent("load-products-finished")
    container.dispatchEvent(event)
  }

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