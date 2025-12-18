import { useRouter, nextTick } from '#imports'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const setAutoplay = () => {
      document.querySelectorAll('video').forEach((el) => {
        const video = el as HTMLVideoElement
        video.setAttribute('autoplay', '')
        video.setAttribute('muted', '')
        video.setAttribute('playsinline', '')
        video.muted = true
        video.play().catch(() => {})
      })
    }

    const router = useRouter()
    router.afterEach(() => nextTick().then(setAutoplay))
    nextTick().then(setAutoplay)
  }
})
