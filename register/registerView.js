export const buildRegisterView = () => {
  return `
    <div class="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-emerald-700">Create Account</h2>

      <form action="#" method="POST" class="space-y-5">
        <div>
          <label for="name" class="text-sm font-medium text-emerald-900">Name</label>
          <input class="w-full mt-1 px-4 text-center text-sm py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="text" id="name" name="name" placeholder="Name"/>
        </div>

        <div>
          <label for="email" class="text-sm font-medium text-emerald-900">Email <span class="text-red-600">*</span></label>
          <input class="w-full mt-1 px-4 text-center text-sm py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="email" id="email" name="email" placeholder="Email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
        </div>

        <div>
          <label for="password" class="text-sm font-medium text-emerald-900">Password <span class="text-red-600">*</span></label>
          <input class="w-full mt-1 px-4 text-center text-sm py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="password" id="password" name="password" placeholder="Password" minlength="6" required />
        </div>

        <div>
          <label for="confirm-password" class="text-sm font-medium text-emerald-900">Confirm Password <span class="text-red-600">*</span></label>
          <input class="w-full mt-1 px-4 text-center text-sm py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="password" id="password-confirm" name="password-confirm" placeholder="Confirm password" minlength="6" required />
        </div>

        <div id="notifications"></div>
        <div class="loader hidden"></div>

        <button type="submit"
          class="block mx-auto px-10 center bg-emerald-800 text-white py-2 rounded-xl hover:bg-green-600 transition duration-300">
          Create
        </button>
      </form>
    </div>
  `
}