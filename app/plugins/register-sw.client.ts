export default defineNuxtPlugin(() => {
  if (import.meta.dev) {
    return
  }

  if (!('serviceWorker' in navigator)) {
    return
  }

  window.addEventListener('load', async () => {
    const existing = await navigator.serviceWorker.getRegistration()

    if (!existing) {
      try {
        await navigator.serviceWorker.register('/sw.js')
      } catch (error) {
        console.error('Service worker registration failed.', error)
      }
    }
  })
})
