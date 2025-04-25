import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications) {
  
  
  const showNotification = (message, type = 'error') => {
    const newNotifications = document.createElement('div')
    newNotifications.classList.add('notifications', type)
    newNotifications.innerHTML = buildNotification(message, type)
    
    notifications.appendChild(newNotifications)

    const closeBtn = newNotifications.querySelector("button")
    
    const removeNotification = () => {
      newNotifications.remove()
    }
    closeBtn.addEventListener('click', removeNotification)

    setTimeout(removeNotification, 3000)
    
  }

  return { showNotification }
}