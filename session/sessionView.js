
export const buildUnauthorizedSession = () => {
  return `
    <div id="container">
      <h1>Bienvenido a Wallapop-Practice</h1>
      <p>Por favor, inicia sesión para continuar.</p>
      <a href="/templates/login.html" class="login">Iniciar sesión</a>
      <a href="/templates/register.html" class="register">Registrarse</a>
    </div>
  `
}

export const buildAuthorizedSession = () => {
  return `
    <div id="container">
      <h1>Wallapop Products</h1>
      <p>Ya puedes comprar y vender productos.</p>
      <br>
      <a href="/templates/create-product.html" class="btn">Crear producto</a>
      <button class="logout">Cerrar sesión</button>
    </div>
  `
}

