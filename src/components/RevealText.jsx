import { useEffect, useRef } from 'react'

export default function RevealText({ text }) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const words = [...root.querySelectorAll('.word')]
    const fine = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const paint = () => {
      if (fine.matches) {
        words.forEach((word) => {
          word.style.opacity = '1'
        })
        return
      }
      const viewH = window.innerHeight || 1
      const fullAt = viewH * 0.2
      const dimAt = viewH * 0.34
      words.forEach((word) => {
        const top = word.getBoundingClientRect().top
        const progress = (dimAt - top) / (dimAt - fullAt)
        const opacity = Math.min(1, Math.max(0.42, progress))
        word.style.opacity = opacity.toFixed(3)
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [text])

  return (
    <p className="statement" ref={ref}>
      {text.split(' ').map((word, index) => (
        <span className="word" key={`${word}-${index}`}>
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
