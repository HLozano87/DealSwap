
export const buildUnauthorizedSession = () => {
  return `
    <a href="/" class="hover:text-emerald-600 transition">Inicio</a>
    <a href="/templates/register.html" class="hover:text-emerald-600 transition">Registro</a>
    <a href="/templates/login.html" class="login text-emerald-600 bg-white hover:bg-emerald-600 hover:shadow-lg hover:text-white transition-colors duration-300 ease-in-out rounded-lg px-4 py-2 inline-block">
      Login
    </a>

  `
}

export const buildAuthorizedSession = () => {
  return `
    <a href="/" class="hover:text-emerald-600 transition">Inicio</a>
    <a href="/templates/create-product.html" class="hover:text-emerald-600 transition">Crear producto</a>
    <button class="logout text-red-600 bg-white hover:bg-red-600 hover:shadow-lg hover:text-white transition-colors duration-300 ease-in-out rounded-lg px-2 py-2">
      Cerrar sesión
    </button>
  `
}

export const buildAuthorizedContainer = () => {
  return `
      <h1 class="text-3xl font-bold text-center text-gray-800">Products</h1>
      <p class="text-center text-gray-600 mt-4">Ya puedes comprar y vender productos.</p>
      <button class="logout hover:text-emerald-600 transition"><a href="/templates/create-product.html" class="hover:text-emerald-600 transition">Crear producto</a></button>
    `
}

export const buildUnathorizedContainer = () => {
  return `
      <h1 class="text-3xl font-bold text-center text-gray-800">Products</h1>
      <p class="text-center text-gray-600 mt-4">Por favor, <a href="/templates/login.html">inicia sesión</a> para continuar.</p>
    `
}