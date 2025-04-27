import { getProductDetail, getLoggedUserInfo, productRemove } from "./productDetailModel.js"
import { buildProductDetailView, buildRemoveProductButton } from "./productDetailView.js"


export const productDetailController = async (productContainer, productId) => {
  
  
  const showRemoveProductButton = () => {
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
  
  try {
    const productDetail = await getProductDetail(productId)
    productContainer.innerHTML = buildProductDetailView(productDetail)

    const user = await getLoggedUserInfo()

    if (user.id === productDetail.userId) {
      showRemoveProductButton(productId)
      const event = new CustomEvent('detail-delete-success', {
        detail: {
          message: 'Anuncio borrado exitosamente.',
          type: 'success'
        }
      })
      productContainer.dispatchEvent(event)
    }
  } catch (error) {
    const event = new CustomEvent('detail-delete-error', {
      detail: error
    })
    productContainer.dispatchEvent(event)
  }

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