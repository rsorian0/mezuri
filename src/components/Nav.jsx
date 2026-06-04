import { useEffect, useRef, useState } from 'react'

const NAV_SECTIONS = ['como-funciona', 'funcionalidades', 'exclusividade', 'agendar']
const LOGO_SIMBOL = (
  <svg style={{ height: '40px', display: 'block' }} viewBox="248 235 300 330" xmlns="http://www.w3.org/2000/svg" fill="#0f172a">
    <path d="M394.15,463.44c49.83,31.78,99.65,63.56,149.48,95.34.02-74.42.04-148.85.06-223.27-49.55-31.43-99.1-62.85-148.65-94.28-.3,74.07-.59,148.14-.89,222.22Z"/>
    <polygon points="352.09 399.76 306.49 399.76 306.49 354.16 301.91 354.16 301.91 399.76 256.31 399.76 256.31 404.34 301.91 404.34 301.91 449.94 306.49 449.94 306.49 404.34 352.09 404.34 352.09 399.76"/>
  </svg>
)

export default function Nav() {
  const [hidden, setHidden] = useState(true)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight
      const scrollY = window.scrollY
      setHidden(scrollY < heroHeight - 100)
      const checkY = scrollY + 80
      let current = ''
      NAV_SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= checkY) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  function scrollTo(id, e) {
    e?.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 68
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={hidden ? 'nav-hidden' : ''}>
        <a href="#" style={{ position: 'absolute', left: '1.5rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          {LOGO_SIMBOL}
        </a>
        <div className="nav-links">
          <a href="#como-funciona" className={active === 'como-funciona' ? 'nav-active' : ''} onClick={e => scrollTo('como-funciona', e)}>Como funciona</a>
          <a href="#funcionalidades" className={active === 'funcionalidades' ? 'nav-active' : ''} onClick={e => scrollTo('funcionalidades', e)}>Funcionalidades</a>
          <a href="#exclusividade" className={active === 'exclusividade' ? 'nav-active' : ''} onClick={e => scrollTo('exclusividade', e)}>Para quem é</a>
          <a href="#agendar" className="btn btn-primary" style={{ color: '#ffffff' }} onClick={e => scrollTo('agendar', e)}>Agendar diagnóstico</a>
        </div>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#como-funciona" onClick={e => scrollTo('como-funciona', e)}>Como funciona</a>
        <a href="#funcionalidades" onClick={e => scrollTo('funcionalidades', e)}>Funcionalidades</a>
        <a href="#exclusividade" onClick={e => scrollTo('exclusividade', e)}>Para quem é</a>
        <a href="https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri"
          target="_blank" rel="noopener" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.121 1.526 5.849L.057 23.5l5.798-1.522A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.366l-.36-.214-3.716.976.993-3.623-.234-.373A9.818 9.818 0 1 1 12 21.818z"/>
          </svg>
          Agendar diagnóstico
        </a>
      </div>
    </>
  )
}
