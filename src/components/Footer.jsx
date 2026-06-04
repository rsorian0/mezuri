const SOCIALS = [
  {
    href: 'https://www.instagram.com/mezuribr', title: 'Instagram',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  },
  {
    href: 'https://www.youtube.com/@mezuribr', title: 'YouTube',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/></svg>
  },
  {
    href: 'https://www.facebook.com/mezuribr', title: 'Facebook',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
  },
  {
    href: 'https://www.linkedin.com/company/mezuribr/', title: 'LinkedIn',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
  },
  {
    href: 'https://www.tiktok.com/@mezuribr', title: 'TikTok',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
  },
]

const LOGO_WHITE = (
  <svg style={{ height: '36px', display: 'block' }} viewBox="248 235 300 330" xmlns="http://www.w3.org/2000/svg" fill="white">
    <path d="M394.15,463.44c49.83,31.78,99.65,63.56,149.48,95.34.02-74.42.04-148.85.06-223.27-49.55-31.43-99.1-62.85-148.65-94.28-.3,74.07-.59,148.14-.89,222.22Z"/>
    <polygon points="352.09 399.76 306.49 399.76 306.49 354.16 301.91 354.16 301.91 399.76 256.31 399.76 256.31 404.34 301.91 404.34 301.91 449.94 306.49 449.94 306.49 404.34 352.09 404.34 352.09 399.76"/>
  </svg>
)

const KUNLATEK_LOGO = (
  <svg style={{ height: '16px', display: 'block' }} viewBox="160 240 490 320" xmlns="http://www.w3.org/2000/svg">
    <defs><style>{`.kw{fill:white}`}</style></defs>
    <path className="kw" d="M220.64,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z"/>
    <path className="kw" d="M286.48,493.39v45.45c0,7.27-5.86,13.13-13.13,13.13h-33.33c-7.27,0-13.13-5.86-13.13-13.13v-45.45h10.91v45.45c0,1.21,1.01,2.22,2.22,2.22h33.33c1.21,0,2.22-1.01,2.22-2.22v-45.45h10.91Z"/>
    <path className="kw" d="M356.78,506.52v45.45h-10.91v-45.45c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v45.45h-10.91v-58.58h46.46c7.27,0,13.13,5.86,13.13,13.13Z"/>
    <path className="kw" d="M367.28,474.2h10.91v64.64c0,1.21,1.01,2.22,2.22,2.22h10.91v10.91h-10.91c-7.27,0-13.13-5.86-13.13-13.13v-64.64Z"/>
    <path className="kw" d="M457.37,506.52v45.45h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-21.61h48.68v-10.71c0-1.21-1.01-2.22-2.22-2.22h-46.46v-10.91h46.46c7.27,0,13.13,5.86,13.13,13.13ZM446.46,528.13h-37.77v10.71c0,1.21,1.01,2.22,2.22,2.22h35.55v-12.93Z"/>
    <path className="kw" d="M478.88,504.3v34.54c0,1.21,1.01,2.22,2.22,2.22h21.82v10.91h-21.82c-7.27,0-13.13-5.86-13.13-13.13v-64.64h10.91v19.19h24.04v10.91h-24.04Z"/>
    <path className="kw" d="M568.76,506.52v21.61h-48.68v10.71c0,1.21,1.01,2.22,2.22,2.22h46.46v10.91h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-32.32c0-7.27,5.86-13.13,13.13-13.13h33.33c7.27,0,13.13,5.86,13.13,13.13ZM557.85,517.22v-10.71c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v10.71h37.77Z"/>
    <path className="kw" d="M638.25,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z"/>
    <path className="kw" d="M246.92,248.03h23.99v159.92h-23.99v-159.92Z"/>
    <path className="kw" d="M382.18,364.98v27.76l-91.29-52.86v-23.99l91.29-52.64v27.76l-64.19,36.87,64.19,37.09Z"/>
    <path className="kw" d="M412.83,364.98l64.19-37.09-64.19-36.87v-27.76l91.29,52.64v23.99l-91.29,52.86v-27.76Z"/>
    <path className="kw" d="M524.54,248.03h23.99v159.92h-23.99v-159.92Z"/>
  </svg>
)

const ss = { fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.15s', display: 'block' }
const hover = e => e.currentTarget.style.color = 'white'
const out = e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'

function scrollTo(id, e) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ all: 'unset', display: 'block', background: '#0f172a', fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '4rem 2.5rem 3rem', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem' }}>

        <div>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ display: 'inline-block', marginBottom: '1.25rem', textDecoration: 'none' }}>
            {LOGO_WHITE}
          </a>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 260, marginBottom: '1.75rem' }}>
            Plataforma de gestão criada do zero para escritórios de arquitetura.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {SOCIALS.map(s => (
              <a key={s.title} href={s.href} target="_blank" rel="noopener" title={s.title}
                style={{ width: 34, height: 34, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.15s' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = 'white' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Produto</div>
          {[['como-funciona','Como funciona'],['funcionalidades','Funcionalidades'],['exclusividade','Para quem é'],['agendar','Agendar diagnóstico']].map(([id, label]) => (
            <div key={id} style={{ marginBottom: '0.6rem' }}>
              <a href={`#${id}`} onClick={e => scrollTo(id, e)} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Empresa</div>
          {[['https://kunlatek.com.br','Kunlatek',true],['#','Sobre',false],['#','Contato',false]].map(([href, label, ext]) => (
            <div key={label} style={{ marginBottom: '0.6rem' }}>
              <a href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Legal</div>
          {[['#','Política de privacidade'],['#','Termos de uso'],['#','Preferências de cookies']].map(([href, label]) => (
            <div key={label} style={{ marginBottom: '0.6rem' }}>
              <a href={href} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© 2025 mezuri. Todos os direitos reservados.</span>
        <a href="https://kunlatek.com.br/" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>Um produto</span>
          {KUNLATEK_LOGO}
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; padding: 3rem 1.25rem 2rem !important; }
          footer > div:last-child { padding: 1rem 1.25rem !important; flex-direction: column !important; align-items: flex-start !important; gap: 0.75rem !important; }
        }
        @media (max-width: 480px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
