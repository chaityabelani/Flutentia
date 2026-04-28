import { useEffect, useRef } from 'react'

/**
 * Attaches Intersection Observer to the returned ref.
 * Adds 'visible' class to each .reveal child when it enters viewport.
 */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = section.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
