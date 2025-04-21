import { loadingController } from "./loading/loadingController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { showProductsController } from "./show-products/showProductController.js"

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".products-container")
  const loader = document.querySelector(".loader")
  const notifications = document.querySelector(".notifications")

  const { show, hide } = loadingController(loader)
  const { showNotification } = notificationsController(notifications)

  container.addEventListener('load-products-started', () => {
    show()
    showNotification('Iniciando la carga de productos...', 'started')
  })
  container.addEventListener('load-products-finished', () => {
    hide()
    showNotification('Carga de productos finalizada.', 'finished')
  })
  container.addEventListener('load-products-error', (event) => {
    const errorMessage = event.detail
    showNotification(errorMessage)
  })
  
  showProductsController(container)
})