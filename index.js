import { showProductsController } from "./show-products/showProductController.js"
// import { showProductModel } from "./show-products/showProductModel.js"

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".products-container")
  showProductsController(container)
})