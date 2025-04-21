
export function loadingController(loading) {
  const show = () => {
    loading.classList.remove("hidden")
  }
  const hide = () => {
    loading.classList.add("hidden")
  }
  return { show, hide }
}