import { productDetailController } from "./product-detail/productDetailController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loadingController } from "./loading/loadingController.js"

document.addEventListener("DOMContentLoaded", () => {

  const searchParams = new URLSearchParams(window.location.search)
  const productId = searchParams.get('id')

  if (productId) {
    const productContainer = document.querySelector(".products-container")
    const notifications = document.querySelector("#notifications")
    const loader = document.querySelector(".loader")

    const { show, hide } = loadingController(loader)
    const { showNotification } = notificationsController(notifications)


    productContainer.addEventListener('detail-delete-started', show)
    productContainer.addEventListener('detail-delete-finished', hide)

    productContainer.addEventListener('detail-delete-error', (event) => {
      const message = event.detail
      showNotification(message)
    })

    productContainer.addEventListener('detail-delete-success', (event) => {
      const message = event.detail.message
      const type = event.detail.type
      showNotification(message, type)
    })
    productDetailController(productContainer, productId)
  } else {
    window.location = '/'
  }


})
