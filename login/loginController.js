import { REGEXP } from "../utils/constants.js"
import { loginUser } from "./loginModel.js"

export function loginController(loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const userEmailElement = loginForm.querySelector("#email")
    const userEmail = userEmailElement.value

    const userPasswordElement = loginForm.querySelector("#password")
    const userPassword = userPasswordElement.value

    const emailRegExp = new RegExp(REGEXP.email)
    
    //TODO especificar error si es de email o password
    if (!emailRegExp.test(userEmail)) {
      const event = CustomEvent('login-error', {
        detail: error.message
      })
      loginForm.dispatchEvent(event)
    } else {
      handleLoginUser(userEmail, userPassword)
    }
  })

  const handleLoginUser = async (userEmail, userPassword) => {
    try {
      const token = await loginUser(userEmail, userPassword)
      localStorage.setItem('token', token)
      const event = new CustomEvent('login-success', {
        detail: {
          message: 'Has hecho login correctamente.',
          type: 'success'
        }
      })
      loginForm.dispatchEvent(event)
    } catch (error) {
      const event = new CustomEvent('login-error', {
        detail: error.message
      })
      loginForm.dispatchEvent(event)
    }
  }
}