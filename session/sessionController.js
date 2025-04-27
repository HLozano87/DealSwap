import { buildAuthorizedContainer, buildAuthorizedSession, buildUnathorizedContainer, buildUnauthorizedSession } from "./sessionView.js"

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
    })
    container.innerHTML = buildAuthorizedContainer()
  } else {
    navbarContainer.innerHTML = buildUnauthorizedSession()
    container.innerHTML = buildUnathorizedContainer()
  }
}