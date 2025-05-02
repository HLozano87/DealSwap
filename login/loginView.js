export const buildLoginView = () => {
  return `
    <div class="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-emerald-700">Login</h2>

      <form action="#" method="POST" class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-emerald-900">Email</label>
          <input
            class="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="email"
            id="email"
            name="email"
            minlength="6"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-emerald-900">Password</label>
          <input
            class="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <!-- <div class="flex items-center justify-between text-sm">
          <label class="flex items-center">
            <input type="checkbox" id="remember" class="form-checkbox mr-2">
            Remember me
          </label>
        </div> -->
        <div id="notifications"></div>
        <div class="loader hidden"></div>
        <button type="submit"
          class="w-full bg-emerald-800 text-white py-2 rounded-xl hover:bg-emerald-600 transition duration-300">
          Submit
        </button>
      </form>

      <p class="mt-6 text-sm text-center text-emerald-900">
        ¿You do not have an account?
        <a href="/templates/register.html" class="text-emerald-600 hover:underline">Create Account</a>
      </p>
    </div>
  `
}