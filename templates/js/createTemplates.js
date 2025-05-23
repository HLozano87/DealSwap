export const buildHeader = () => {
  return `
    <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4 rounded-b-2xl">

      <h1 class="text-2xl font-bold text-emerald-600">
        <a href="/" class="flex items-center space-x-2">
          <img src="/assets/img/logo.webp" alt="DealSwap Logo" class="h-10">
          <span>DealSwap</span>
        </a>
      </h1>
      
      <form id="search" class="flex items-center rounded-md px-3 py-2 h-10 max-w-md">
      </form>

      <nav id="navbar"
        class="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 text-gray-700 text-sm font-medium">
        <ul class="flex flex-col sm:flex-row gap-4">
          <li><a href="/" class="hover:text-emerald-600 transition">Inicio</a></li>
          <li><a href="/templates/register.html" class="hover:text-emerald-600 transition">Registro</a></li>
          <li><a href="/templates/login.html" class="hover:text-emerald-600 transition">Login</a></li>
        </ul>
      </nav>
    </div>
  `
}

export const buildSearch = () => {
  return `
    <input
      class="w-full outline-none mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
      type="text"
      placeholder="Buscar..."
      name="search"
    />
    <button type="submit" class="ml-2 text-gray-500 hover:text-emerald-600 transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  `
}

export const buildFooter = () => {
  return `
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-t-2xl">

      <div class="flex items-center gap-4 text-center sm:text-left">
        <a href="/">
          <img src="/assets/img/logo.webp" alt="DealSwap Logo" class="h-6">
        </a>
        <p class="text-sm text-gray-600">&copy; ${new Date().getFullYear()} DealSwap. Todos los derechos reservados.</p>
      </div>

      <nav class="flex flex-col sm:flex-row items-center gap-4 text-gray-700 text-sm font-medium">
        <a href="/templates/about.html" class="hover:text-emerald-600 transition">Acerca de</a>
        <a href="/templates/contact.html" class="hover:text-emerald-600 transition">Contacto</a>
        <a href="/templates/privacy.html" class="hover:text-emerald-600 transition">Privacidad</a>
      </nav>

      <div class="flex items-center gap-4">

        <a href="https://x.com/" class="text-gray-600 hover:text-emerald-600 transition" target="_blank" rel="noopener">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.23 5.924a8.348 8.348 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.15 4.15a4.106 4.106 0 001.27 5.482 4.073 4.073 0 01-1.86-.514v.052a4.107 4.107 0 003.292 4.025 4.09 4.09 0 01-1.853.07 4.107 4.107 0 003.834 2.85A8.233 8.233 0 012 19.54a11.616 11.616 0 006.29 1.844c7.547 0 11.675-6.155 11.675-11.49 0-.175-.004-.35-.012-.524A8.18 8.18 0 0022.23 5.924z" />
          </svg>
        </a>

        <a href="https://github.com/" class="text-gray-600 hover:text-emerald-600 transition" target="_blank"
          rel="noopener">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.04c-5.51 0-9.96 4.46-9.96 9.96 0 4.39 2.84 8.13 6.77 9.46.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.76.6-3.35-1.33-3.35-1.33-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.2-.25-4.51-1.1-4.51-4.91 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.51 9.51 0 015 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.69 1.03 1.58 1.03 2.66 0 3.82-2.31 4.66-4.51 4.91.36.31.69.92.69 1.85 0 1.33-.01 2.41-.01 2.73 0 .27.18.58.69.48a10.003 10.003 0 006.77-9.46c0-5.5-4.46-9.96-9.96-9.96z" />
          </svg>
        </a>

        <a href="https://www.instagram.com/" class="text-gray-600 hover:text-emerald-600 transition" target="_blank"
          rel="noopener">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
          </svg>
        </a>
      </div>
    </div>
  `
}
