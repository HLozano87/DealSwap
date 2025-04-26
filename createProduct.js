import { createProductController } from "./create-product/createProductController.js"

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem('token')

  if (!token) {
    window.location = '/templates/login.html'
  }

  const createProductForm = document.querySelector("form")
  createProductController(createProductForm)
})