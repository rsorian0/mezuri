import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ProductTour from './components/ProductTour'
import Exclusive from './components/Exclusive'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
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

    const hlObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          hlObs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.6 })

    const timeout = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
      document.querySelectorAll('.hl-clean').forEach(el => hlObs.observe(el))
    }, 100)

    return () => { clearTimeout(timeout); obs.disconnect(); hlObs.disconnect() }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <ProductTour />
      <Exclusive />
      <CTA />
      <Footer />
      <CookieBanner />
    </>
  )
}
