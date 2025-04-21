import { buildNotification } from "./notificationsView.js"

export function notificationsController(notifications) {
  
  
  const showNotification = (message, type = 'error') => {
    const newNotifications = document.createElement('div')
    newNotifications.classList.add('notifications', type)
    newNotifications.innerHTML = buildNotification(message, type)
    
    notifications.appendChild(newNotifications)
  
    const removeNotification = () => {
      newNotifications.remove()
    }

    if(type === 'started') {
      setTimeout(removeNotification, 4000)
    }
    if(type === 'finished') {
      setTimeout(removeNotification, 2000)
    }

  }

  return { showNotification }
}