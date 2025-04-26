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
    const productPicture = productPictureElement.value

    try {
      await createProduct(productName, productDescription, productPrice, productType, productPicture)
      setTimeout(() => {
        window.location = '/'
      }, 1000);
    } catch (error) {
      //TODO event error
      alert(error.message)
    }

  })
}