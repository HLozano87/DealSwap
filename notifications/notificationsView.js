export const buildNotification = (message, type = 'success') => {
  const isError = type === 'error'
  return `
    <div class="flex items-center justify-center gap-2 p-3 ${isError ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300'} border rounded-lg">
      <p class="${isError ? 'text-red-800' : 'text-green-800'} text-sm text-center">${message}</p>
      <button class="${isError ? 'text-red-500 hover:text-red-700' : 'text-green-500 hover:text-green-700'} text-xs">
        ${isError ? '❌' : '✅'}
      </button>
    </div>
  `
}