import { createProduct } from "./createProductModel.js"

export const createProductController = (form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const productNameElement = form.querySelector('#name')
    const productName = productNameElement.value

    const productDescriptionElement = form.querySelector('#description')
    const productDescription = productDescriptionElement.value

    const productPriceElement = form.querySelector('#price')
    const productPrice = productPriceElement.value

    const productTypeElement = form.querySelector('input[name="isPurchase"]:checked')
    const productType = productTypeElement.value

    const productPictureElement = form.querySelector('#picture')
    const productPictureInputValue = productPictureElement.value.trim()
    const productPicture = productPictureInputValue || `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`

    try {
      await handleCreateProduct(productName, productDescription, productPrice, productType, productPicture, form)

      setTimeout(window.location = '/', 2000)
    } catch (error) {
      const event = new CustomEvent('create-product-error', {
        detail: error.message
      })
      form.dispatchEvent(event)
    } 
  })
}

const handleCreateProduct = async (productName, productDescription, productPrice, productType, productPicture, form) => {
  const event = new CustomEvent('create-product-started')
  form.dispatchEvent(event)
  try {
    await createProduct(productName, productDescription, productPrice, productType, productPicture)
    const event = new CustomEvent('create-product-success', {
      detail: {
        message: 'Producto creado correctamente.',
        type: 'success'
      }
    })
    form.dispatchEvent(event)
  } catch (error) {
    const event = new CustomEvent('create-product-error', {
      detail: error.message
    })
    form.dispatchEvent(event)

  } finally {
    const event = new CustomEvent('create-product-finished')
    form.dispatchEvent(event)
  }
}