import { notificationsController } from "./notifications/notificationsController.js"
import { registerController } from "./register/registerController.js"
import { loadingController } from "./loading/loadingController.js"



document.addEventListener("DOMContentLoaded", () => {
  
  const registerForm = document.querySelector("form")
  const notifications = document.querySelector("#notifications")
  const loader = document.querySelector(".loader")

  const { show, hide } = loadingController(loader)
  const { showNotification } = notificationsController(notifications)

  registerForm.addEventListener('register-started', show)
  registerForm.addEventListener('register-finished', hide)

  registerForm.addEventListener('register-error', (event) => {
    const message = event.detail
    showNotification(message)
  })

  registerForm.addEventListener('register-success', (event) => {
    const message = event.detail.message
    const type = event.detail.type
    showNotification(message, type)
  })

  registerController(registerForm)
})