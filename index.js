import { loadingController } from "./loading/loadingController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { sessionController } from "./session/sessionController.js"
import { showProductsController } from "./show-products/showProductController.js"
import { buildHeader, buildFooter } from "./templates/js/createTemplates.js"

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector('header')
  headerElement.innerHTML = buildHeader()

  const footerElement = document.querySelector('footer')
  footerElement.innerHTML = buildFooter()

  const container = document.querySelector(".products-container")
  const loader = document.querySelector(".loader")
  const notifications = document.querySelector(".notifications")
  const session = document.querySelector(".session")

  const { show, hide } = loadingController(loader)
  const { showNotification } = notificationsController(notifications)

  container.addEventListener('load-products-started', show)
  container.addEventListener('load-products-finished', hide)
  
  container.addEventListener('load-products-error', (event) => {
    const errorMessage = event.detail
    showNotification(errorMessage)
  })
  
  showProductsController(container)
  sessionController(session)
})