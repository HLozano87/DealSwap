import { getProductDetail, getLoggedUserInfo, productRemove, productUpdate } from "./productDetailModel.js"
import { buildProductDetailView, buildRemoveProductButton, buildUpdateProductButton } from "./productDetailView.js"


export const productDetailController = async (productContainer, productId) => {
  
  try {
    const productDetail = await getProductDetail(productId)
    productContainer.innerHTML = buildProductDetailView(productDetail)

    const user = await getLoggedUserInfo()

    if (user.id === productDetail.userId) {
      showRemoveProductButton(productContainer, productId)
      // TODO
      showUpdateProductButton(productContainer, productId)
    }
  } catch (error) {
    const event = new CustomEvent('detail-delete-error', {
      detail: error
    })
    productContainer.dispatchEvent(event)
  }

}

const showRemoveProductButton = (productContainer, productId) => {
  const removeButton = buildRemoveProductButton()
  const card = productContainer.querySelector('.card')
  const buttonContainer = document.createElement('div')
  buttonContainer.className = "mt-4 flex justify-center"
  buttonContainer.appendChild(removeButton)
  card.appendChild(buttonContainer)

  removeButton.addEventListener('click', () => {
    if (confirm('¿Estas seguro que quieres borrar el anuncio?')) {
      handleDeleteProduct(productContainer, productId)
    }
  })
}


// TODO
const showUpdateProductButton = (productContainer, productId) => {
  const updateButton = buildUpdateProductButton()
  const card = productContainer.querySelector('.card')
  const buttonContainer = document.createElement('div')
  buttonContainer.className = "mt-4 flex justify-center"
  buttonContainer.appendChild(updateButton)
  card.appendChild(buttonContainer)

  updateButton.addEventListener('click', () => {
    handleUpdateProduct(productContainer, productId)
  })
}

const handleDeleteProduct = async (productContainer, productId) => {
  const cardProduct = productContainer.querySelector('.card')
  const startedEvent = new CustomEvent('detail-delete-started')
  productContainer.dispatchEvent(startedEvent)

  try {
    await productRemove(productId);
    const successEvent = new CustomEvent('detail-delete-success', {
      detail: {
        message: 'Producto eliminado exitosamente.',
        type: 'success'
      }
    })
    productContainer.dispatchEvent(successEvent)
    
    if (cardProduct) {
      cardProduct.remove()
    }
  } catch (error) {
    const errorEvent = new CustomEvent('detail-delete-error', {
      detail: error.message
    })
    productContainer.dispatchEvent(errorEvent)
  } finally {
    const finishedEvent = new CustomEvent('detail-delete-finished')
    productContainer.dispatchEvent(finishedEvent)
  }
}

// TODO
const handleUpdateProduct = async (productContainer, productId) => {
  const cardProduct = productContainer.querySelector('.card')
  const startedEvent = new CustomEvent('detail-update-started')
  productContainer.dispatchEvent(startedEvent)

  try {
    await productUpdate(productId);
    const successEvent = new CustomEvent('detail-update-success', {
      detail: {
        message: 'Producto actualizado correctamente.',
        type: 'success'
      }
    })
    productContainer.dispatchEvent(successEvent)
    
    if (cardProduct) {
      const updatedProduct = await getProductDetail(productId)
      productContainer.innerHTML = buildProductDetailView(updatedProduct)
    }
  } catch (error) {
    const errorEvent = new CustomEvent('detail-update-error', {
      detail: error.message
    })
    productContainer.dispatchEvent(errorEvent)
  } finally {
    const finishedEvent = new CustomEvent('detail-update-finished')
    productContainer.dispatchEvent(finishedEvent)
  }
}