import { createProductController } from "./create-product/createProductController.js"
import { loadingController } from "./loading/loadingController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { buildCreateProduct } from "./create-product/createProductView.js"

document.addEventListener("DOMContentLoaded", () => {
  
  const pageCreateProduct = document.querySelector('#create-product')
  pageCreateProduct.innerHTML = buildCreateProduct()

  const notifications = pageCreateProduct.querySelector("#notifications")
  const loader = pageCreateProduct.querySelector(".loader")

  const { showNotification } = notificationsController(notifications)
  const { show, hide } = loadingController(loader)
  const token = localStorage.getItem('token')

  if (!token) {
    showNotification('Debes iniciar sesion para registrar un producto.')
    setTimeout(() => {
      window.location = '/'
    }, 2000)
  } 


  const createProductForm = pageCreateProduct.querySelector("form")

  createProductForm.addEventListener('create-product-started', show)
  createProductForm.addEventListener('create-product-finished', hide)

  createProductForm.addEventListener('create-product-error', (event) => {
    const message = event.detail
    showNotification(message)
  })

  createProductForm.addEventListener('create-product-success', (event) => {
    const message = event.detail.message
    const type = event.detail.type
    
    showNotification(message, type)
  })

  createProductController(createProductForm)
})