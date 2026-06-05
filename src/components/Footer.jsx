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

        {/* Brand */}
        <div>
          <a
            href="#"
            style={{ display: 'inline-block', marginBottom: '1.5rem', textDecoration: 'none' }}
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <svg
              style={{ height: '52px', width: 'auto', display: 'block' }}
              viewBox="0 0 571.06 317.55"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M404.67,153.3c-.87-1.45-2.1-2.62-3.7-3.51-1.6-.89-3.75-1.33-6.44-1.33-2.85,0-5.38.62-7.59,1.87-2.21,1.25-3.98,3.16-5.3,5.76-.41-1.07-.9-2.06-1.49-2.97-.58-.92-1.32-1.72-2.21-2.4-.89-.69-1.97-1.23-3.24-1.64-1.27-.41-2.82-.61-4.65-.61-2.59,0-4.98.6-7.17,1.79-2.19,1.2-3.86,2.94-5.03,5.22h-.15v-5.95h-4.58v39.5h4.58v-21.28c0-.81.04-1.7.11-2.67.08-.97.22-1.93.42-2.9.2-.97.47-1.89.8-2.78.33-.89.75-1.66,1.26-2.33,1.17-1.53,2.53-2.66,4.08-3.39,1.55-.74,3.16-1.11,4.84-1.11,3.25,0,5.48.81,6.67,2.44,1.19,1.63,1.79,3.86,1.79,6.71v27.3h4.58v-21.28c0-.81.04-1.7.11-2.67.08-.97.22-1.93.42-2.9.2-.97.47-1.89.8-2.78.33-.89.75-1.66,1.26-2.33,1.17-1.53,2.53-2.66,4.08-3.39,1.55-.74,3.16-1.11,4.84-1.11,3.25,0,5.48.81,6.67,2.44,1.19,1.63,1.79,3.86,1.79,6.71v27.3h4.58v-24.94c0-1.98-.14-3.91-.42-5.8-.28-1.88-.85-3.55-1.72-4.99Z"/>
              <path d="M446.16,154.06c-3.1-3.74-7.37-5.61-12.81-5.61-2.85,0-5.39.55-7.63,1.64-2.24,1.09-4.13,2.59-5.68,4.5-1.55,1.91-2.75,4.13-3.58,6.67-.84,2.54-1.26,5.26-1.26,8.16s.36,5.6,1.07,8.12c.71,2.52,1.8,4.7,3.28,6.56,1.47,1.86,3.36,3.32,5.64,4.38,2.29,1.07,5.01,1.6,8.16,1.6,2.49,0,4.68-.33,6.56-.99,1.88-.66,3.51-1.59,4.88-2.78,1.37-1.19,2.52-2.59,3.43-4.19.92-1.6,1.65-3.34,2.21-5.22h-5.11c-.71,2.9-2.14,5.14-4.27,6.71-2.14,1.58-4.7,2.36-7.7,2.36-2.19,0-4.12-.42-5.8-1.26-1.68-.84-3.06-1.96-4.16-3.36-1.09-1.4-1.92-3.05-2.48-4.96-.56-1.91-.84-3.93-.84-6.06h30.66c.05-7.12-1.48-12.54-4.58-16.28ZM420.08,166.53c.2-1.88.64-3.66,1.3-5.34.66-1.68,1.54-3.15,2.63-4.42,1.09-1.27,2.41-2.29,3.97-3.05,1.55-.76,3.34-1.14,5.38-1.14s3.84.37,5.41,1.11c1.58.74,2.88,1.73,3.93,2.97,1.04,1.25,1.83,2.72,2.36,4.42.53,1.7.8,3.52.8,5.45h-25.77Z"/>
              <polygon points="488.78 153.57 488.78 149.52 458.43 149.52 458.43 153.34 482.91 153.34 456.68 184.98 456.68 189.03 489.77 189.03 489.77 185.21 462.55 185.21 488.78 153.57"/>
              <path d="M524.55,171.03c0,2.19-.28,4.19-.84,6.02-.56,1.83-1.35,3.41-2.36,4.73-1.02,1.32-2.28,2.35-3.78,3.09-1.5.74-3.19,1.11-5.07,1.11-3.61,0-6.2-.9-7.78-2.71-1.58-1.8-2.36-4.41-2.36-7.82v-25.93h-4.58v26c0,2.09.24,4,.72,5.76.48,1.75,1.27,3.29,2.36,4.61,1.09,1.32,2.53,2.35,4.31,3.09,1.78.74,3.99,1.11,6.63,1.11,1.73,0,3.25-.22,4.58-.65,1.32-.43,2.48-.97,3.47-1.6.99-.64,1.87-1.33,2.63-2.1.76-.76,1.45-1.5,2.06-2.21v5.49h4.58v-39.5h-4.58v21.5Z"/>
              <path d="M545.14,156.92h-.15v-7.4h-4.58v39.5h4.58v-19.37c0-2.19.19-4.28.57-6.29.38-2.01,1.07-3.75,2.06-5.22.99-1.47,2.33-2.64,4-3.51,1.68-.86,3.81-1.27,6.41-1.22v-4.96c-3.31,0-5.96.62-7.97,1.87-2.01,1.25-3.65,3.44-4.92,6.6Z"/>
              <rect x="566.26" y="149.52" width="4.58" height="39.5"/>
              <rect x="566.03" y="134.12" width="5.03" height="6.79"/>
              <path d="M137.85,222.22c49.83,31.78,99.65,63.56,149.48,95.34.02-74.42.04-148.85.06-223.27C237.83,62.85,188.28,31.43,138.73,0c-.3,74.07-.59,148.14-.89,222.22Z"/>
              <polygon points="95.78 158.54 50.18 158.54 50.18 112.94 45.6 112.94 45.6 158.54 0 158.54 0 163.12 45.6 163.12 45.6 208.72 50.18 208.72 50.18 163.12 95.78 163.12 95.78 158.54"/>
            </svg>
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

          <a
            href="https://kunlatek.com.br/"
            target="_blank"
            rel="noopener"
            style={{ marginTop: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0px', textDecoration: 'none' }}
            onMouseOver={e => e.currentTarget.querySelector('svg').style.opacity = '1'}
            onMouseOut={e => e.currentTarget.querySelector('svg').style.opacity = '0.65'}
          >
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>Um produto</span>
            <svg
              style={{ height: '104px', display: 'block', transition: 'opacity 0.15s', opacity: '0.65' }}
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M220.64,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z"/>
              <path d="M286.48,493.39v45.45c0,7.27-5.86,13.13-13.13,13.13h-33.33c-7.27,0-13.13-5.86-13.13-13.13v-45.45h10.91v45.45c0,1.21,1.01,2.22,2.22,2.22h33.33c1.21,0,2.22-1.01,2.22-2.22v-45.45h10.91Z"/>
              <path d="M356.78,506.52v45.45h-10.91v-45.45c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v45.45h-10.91v-58.58h46.46c7.27,0,13.13,5.86,13.13,13.13Z"/>
              <path d="M367.28,474.2h10.91v64.64c0,1.21,1.01,2.22,2.22,2.22h10.91v10.91h-10.91c-7.27,0-13.13-5.86-13.13-13.13v-64.64Z"/>
              <path d="M457.37,506.52v45.45h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-21.61h48.68v-10.71c0-1.21-1.01-2.22-2.22-2.22h-46.46v-10.91h46.46c7.27,0,13.13,5.86,13.13,13.13ZM446.46,528.13h-37.77v10.71c0,1.21,1.01,2.22,2.22,2.22h35.55v-12.93Z"/>
              <path d="M478.88,504.3v34.54c0,1.21,1.01,2.22,2.22,2.22h21.82v10.91h-21.82c-7.27,0-13.13-5.86-13.13-13.13v-64.64h10.91v19.19h24.04v10.91h-24.04Z"/>
              <path d="M568.76,506.52v21.61h-48.68v10.71c0,1.21,1.01,2.22,2.22,2.22h46.46v10.91h-46.46c-7.27,0-13.13-5.86-13.13-13.13v-32.32c0-7.27,5.86-13.13,13.13-13.13h33.33c7.27,0,13.13,5.86,13.13,13.13ZM557.85,517.22v-10.71c0-1.21-1.01-2.22-2.22-2.22h-33.33c-1.21,0-2.22,1.01-2.22,2.22v10.71h37.77Z"/>
              <path d="M638.25,493.39v1.52l-25.15,27.77,25.15,27.77v1.52h-12.93l-21.92-23.84h-13.13v23.84h-10.91v-77.77h10.91v43.03h13.13l21.92-23.84h12.93Z"/>
              <path d="M246.92,248.03h23.99v159.92h-23.99v-159.92Z"/>
              <path d="M382.18,364.98v27.76l-91.29-52.86v-23.99l91.29-52.64v27.76l-64.19,36.87,64.19,37.09Z"/>
              <path d="M412.83,364.98l64.19-37.09-64.19-36.87v-27.76l91.29,52.64v23.99l-91.29,52.86v-27.76Z"/>
              <path d="M524.54,248.03h23.99v159.92h-23.99v-159.92Z"/>
            </svg>
          </a>
        </div>

        {/* Produto */}
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Produto</div>
          {[['como-funciona','Como funciona'],['funcionalidades','Funcionalidades'],['exclusividade','Para quem é'],['agendar','Agendar diagnóstico']].map(([id, label]) => (
            <div key={id} style={{ marginBottom: '0.6rem' }}>
              <a href={`#${id}`} onClick={e => scrollTo(id, e)} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>

        {/* Empresa */}
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Empresa</div>
          {[['https://kunlatek.com.br','Kunlatek',true],['/mezuri/sobre.html','Sobre',false],['#','Contato',false]].map(([href, label, ext]) => (
            <div key={label} style={{ marginBottom: '0.6rem' }}>
              <a href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>Legal</div>
          {[  
            ['/mezuri/privacidade.html', 'Política de privacidade'],
            ['/mezuri/termos.html', 'Termos de uso'],
            ['#', 'Preferências de cookies'],
          ].map(([href, label]) => (
            <div key={label} style={{ marginBottom: '0.6rem' }}>
              <a href={href} style={ss} onMouseOver={hover} onMouseOut={out}>{label}</a>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '1.25rem 2.5rem' }}>
        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© 2025 mezuri. Todos os direitos reservados.</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
            padding: 3rem 1.25rem 2rem !important;
          }
          footer > div:first-child > div:first-child {
            grid-column: 1 / -1 !important;
          }
          footer > div:first-child > div:first-child svg:first-of-type {
            height: 36px !important;
          }
          footer > div:first-child > div:first-child > div {
            flex-wrap: wrap !important;
          }
          footer > div:last-child {
            padding: 1rem 1.25rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
        @media (max-width: 480px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
