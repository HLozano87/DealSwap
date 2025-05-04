import { notificationsController } from "./notifications/notificationsController.js"
import { registerController } from "./register/registerController.js"
import { loadingController } from "./loading/loadingController.js"
import { buildHeader, buildFooter } from "./templates/js/createTemplates.js"


document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector('header')
  headerElement.innerHTML = buildHeader()

  const footerElement = document.querySelector('footer')
  footerElement.innerHTML = buildFooter()

  const pageBuildRegister = document.querySelector('#register')
  pageBuildRegister.innerHTML = buildRegisterView()

  const registerForm = pageBuildRegister.querySelector("form")
  const notifications = pageBuildRegister.querySelector("#notifications")
  const loader = pageBuildRegister.querySelector(".loader")

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