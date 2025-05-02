import { loginController } from "./login/loginController.js"
import { notificationsController } from "./notifications/notificationsController.js"
import { loadingController } from "./loading/loadingController.js"
import { buildLoginView } from "./login/loginView.js"

document.addEventListener("DOMContentLoaded", () => {

  const buildPageLogin = document.querySelector('#login')
  buildPageLogin.innerHTML = buildLoginView()

  const loginForm = buildPageLogin.querySelector("form")
  const notifications = buildPageLogin.querySelector("#notifications")
  const loader = buildPageLogin.querySelector(".loader")
  
  const { show, hide } = loadingController(loader)
  const { showNotification } = notificationsController(notifications)

  loginForm.addEventListener('login-started', show)
  loginForm.addEventListener('login-finished', hide)

  loginForm.addEventListener('login-error', (event) => {
    const message = event.detail
    showNotification(message)
  })

  loginForm.addEventListener('login-success', (event) => {
    const message = event.detail.message
    const type = event.detail.type
    showNotification(message, type)
  })
  
  loginController(loginForm)
})