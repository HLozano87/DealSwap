
export const registerController = (form) => {

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const emailElement = form.querySelector('#email')
    const email = emailElement.value
    
    const passwordElement = form.querySelector('#password')
    const password = passwordElement.value
    
    const passwordConfirmElement = form.querySelector('#password-confirm')
    const passwordConfirm = passwordConfirmElement.value
    const errors = []

    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    if (!emailRegExp.test(email)) {
      errors.push('El formato del email no es correcto.')
    }
    if (password !== passwordConfirm) {
      errors.push('Las contraseñas no coinciden.')
    }

    if (errors.length === 0) {

    } else {
      errors.forEach(error => {
        const event = new CustomEvent('register-error', {
          detail: error
        })
        form.dispathEvent(event)
      })
    }
  })
}