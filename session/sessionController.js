import { buildAuthorizedContainer, buildAuthorizedSession, buildUnauthorizedContainer, buildUnauthorizedSession } from "./sessionView.js"

export const sessionController = (container) => {
  // const isUserLoggedIn = !!localStorage.getItem('token')
  const isUserLoggedIn = Boolean(localStorage.getItem('token'))
  const navbarContainer = document.querySelector('#navbar')

  if (isUserLoggedIn) {
    navbarContainer.innerHTML = buildAuthorizedSession()

    const logoutButton = navbarContainer.querySelector(".logout")
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('token')
      sessionController(container)
      location.reload()
    })
    container.innerHTML = buildAuthorizedContainer()
  } else {
    navbarContainer.innerHTML = buildUnauthorizedSession()
    container.innerHTML = buildUnauthorizedContainer()
  }
}