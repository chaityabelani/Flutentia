import { useEffect, useRef } from 'react'

/**
 * Attaches Intersection Observer to the returned ref.
 * Adds 'visible' to .reveal / .reveal-left / .reveal-right / .reveal-scale / .reveal-fade
 * children when they enter the viewport, and removes it when they leave —
 * enabling re-animation on both scroll-down AND scroll-up.
 */
export default function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            // Remove so it re-animates when scrolled back into view
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold, rootMargin: '0px 0px -48px 0px' }
    )

    const elements = section.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
