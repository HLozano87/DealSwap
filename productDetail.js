import { productDetailController } from "./product-detail/productDetailController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loadingController } from "./loading/loadingController.js"
import { buildHeader, buildFooter } from "./templates/js/createTemplates.js"
import { sessionController } from "./session/sessionController.js"


document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector('header')
  headerElement.innerHTML = buildHeader()

  const footerElement = document.querySelector('footer')
  footerElement.innerHTML = buildFooter()

  const searchParams = new URLSearchParams(window.location.search)
  const productId = searchParams.get('id')
  
  const token = localStorage.getItem('token')
  
  if (productId) {
    const session = document.querySelector(".session")
    const productContainer = document.querySelector(".products-container")
    const notifications = document.querySelector(".notifications")
    const loader = document.querySelector(".loader")

    const { show, hide } = loadingController(loader)
    const { showNotification } = notificationsController(notifications)

    productDetailController(productContainer, productId)
    
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
    
    sessionController(session)
  } else {
    window.location = '/'
  }
  if (!token) {
    showNotification('Debes iniciar sesion para registrar un producto.')
    setTimeout(() => {
      window.location = '/'
    }, 2000)
  }
})
