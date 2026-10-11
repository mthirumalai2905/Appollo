import { useEffect, useRef } from 'react'

export default function BackgroundVideo({ src, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => {
      if (motion.matches) {
        video.pause()
        return
      }
      const start = () => {
        video.play().catch(() => {})
      }
      if (video.readyState >= 2) start()
      else video.addEventListener('canplay', start, { once: true })
    }

    sync()
    motion.addEventListener('change', sync)
    return () => motion.removeEventListener('change', sync)
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
