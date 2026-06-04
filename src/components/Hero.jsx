import { useEffect, useRef } from 'react'
import LogoVertical from '../assets/logo-vertical.svg'

const WORDS = ['merece', 'precisa', 'sempre quis']

export default function Hero() {
  const swapRef = useRef()
  const hintRef = useRef()

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const el = swapRef.current
        if (!el) return
        el.classList.add('fading')
        setTimeout(() => {
          i = (i + 1) % WORDS.length
          el.textContent = WORDS[i]
          el.classList.remove('fading')
        }, 500)
      }, 3200)
      return () => clearInterval(interval)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const hint = hintRef.current
    if (!hint) return
    function hideHint() {
      if (window.scrollY > 60) {
        hint.style.transition = 'opacity 0.5s ease'
        hint.style.opacity = '0'
        hint.style.pointerEvents = 'none'
        window.removeEventListener('scroll', hideHint)
      }
    }
    window.addEventListener('scroll', hideHint, { passive: true })
    return () => window.removeEventListener('scroll', hideHint)
  }, [])

  function scrollToHow(e) {
    e.preventDefault()
    const el = document.getElementById('como-funciona')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div style={{ marginBottom: '1.5rem' }}>
        <img src={LogoVertical} alt="mezuri" style={{ height: '180px', display: 'block', margin: '0 auto' }} />
      </div>

      <h1 className="hero-title">
        Gestão que o seu escritório<br />
        <span className="muted"><span className="wr-swap" ref={swapRef}>merece</span> ter.</span>
      </h1>

      <p className="hero-sub">
        Uma plataforma de gestão criada do zero para escritórios de arquitetura. Projetos, tarefas, prazos e responsabilidades em um só lugar.
      </p>

      <div className="hero-actions">
        <a
          href="https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri"
          className="btn btn-primary btn-lg"
          target="_blank" rel="noopener"
        >
          Agendar diagnóstico gratuito
        </a>
      </div>

      <a href="#como-funciona" ref={hintRef} id="scrollHint"
        style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '7px', textDecoration: 'none', marginTop: '2rem', animation: 'fadeUp 0.8s ease 1.4s both' }}
        onClick={scrollToHow}>
        <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-fg)', whiteSpace: 'nowrap' }}>role para explorar</span>
        <svg id="arrowSvg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted-fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </section>
  )
}
