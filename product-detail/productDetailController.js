import { productDetailModel } from "./productDetailModel.js"
import { buildProductDetailView } from "./productDetailView.js"


export const productDetailController = async (productContainer, productId) => {

  const drawProductDetail = (productDetail, productContainer) => {

  }

  try {
    const productDetail = await productDetailModel(productId)
    productContainer.innerHTML = buildProductDetailView(productDetail)
  } catch (error) {
    //TODO Custom Event
    alert(error.message)
  }

}