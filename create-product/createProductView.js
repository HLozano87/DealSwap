export const buildCreateProduct = () => {
  return `
    <div class="bg-white p-8 rounded-2xl shadow-lg px-[3rem]">
      <h1 class="text-2xl font-bold mb-6 text-center text-emerald-700">Advertise a Product</h1>
      <form action="#" method="POST" class="space-y-5">

        <div>
          <label for="name" class="text-sm font-medium text-emerald-900">Title <span class="text-red-600">*</span></label>
          <input
            class="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div>
          <label class="text-sm font-medium text-emerald-900 mb-1">Description <span class="text-red-600">*</span></label>
          <textarea
            class="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            name="description"
            id="description"
            required rows="4"
            maxlength="300"
          ></textarea>
        </div>

        <div>
          <label class="text-sm font-medium text-emerald-900 mb-1">Price <span class="text-red-600">*</span></label>
          <input
            class="w-full border border-gray-300 mt-2 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="number"
            name="price"
            id="price"
            min="0"
            required
          />
        </div>

        <div>
          <label class="text-sm font-medium text-emerald-900 mb-1">Type <span class="text-red-600">*</span></label>
          <div
            class="h-12 border border-gray-300 mt-2 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-600 flex justify-around">
            <label for="compra" class="inline-flex items-center space-x-4">
              <input
                class="text-blue-500 focus:ring-blue-500 rounded"
                type="radio"
                name="isPurchase"
                id="compra"
                value="Compra"
                required
              />
              <span class="text-[1rem] px-3 font-medium rounded-full bg-emerald-100 text-emerald-800 text-emerald-800 mb-1">Shop</span>
            </label>
            <label for="venta" class="inline-flex items-center space-x-4">
              <input class="text-blue-500 focus:ring-blue-500 rounded"
                type="radio"
                name="isPurchase"
                id="venta"
                value="Venta"
              />
              <span class="text-[1rem] px-3 font-medium rounded-full bg-blue-100 text-blue-800 mb-1">Sell</span>
            </label>
          </div>
        </div>

        <div>
          <label class="text-sm font-medium text-emerald-900 mb-1">Picture (optional)</label>
          <input
            class="w-full text-center mt-2 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="text"
            name="picture"
            id="picture"
            placeholder="Paste image link here"
          />
        </div>
        <div id="notifications"></div>
        <div class="loader hidden"></div>
        <div class="text-center">
          <button type="submit" class="bg-emerald-800 text-white px-10 py-2 rounded-xl hover:bg-emerald-600 transition">
            Publish Product
          </button>
        </div>
      </form>
    </div>
  `
}