import { useEffect } from 'react'
export function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const seen = new Map()
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const parent = entry.target.parentElement
        const count = seen.get(parent) || 0
        seen.set(parent, count + 1)
        entry.target.style.transitionDelay = (count * 0.1) + 's'
        entry.target.classList.add('visible')
        obs.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
