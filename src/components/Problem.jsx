const PROBLEMS = [
  {
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'Projetos atrasam',
    text: 'porque ninguém sabe em que pé cada etapa está.',
  },
  {
    icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    title: 'Tarefas ficam soltas',
    text: 'em WhatsApp, planilhas e e-mails sem rastreio nenhum.',
  },
  {
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></>,
    title: 'Decisões não ficam registradas',
    text: 'e somem quando alguém sai do escritório.',
  },
  {
    icon: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>,
    title: 'O dono vira apagador de incêndio',
    text: 'o dia todo e perde o controle do negócio.',
  },
]

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-badge">O problema</div>
        <h2 className="section-title">
          Escritórios de arquitetura não quebram<br />
          <span className="muted">por falta de talento.</span>
        </h2>
        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="problem-item fade-up">
              <div className="prob-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}
                </svg>
              </div>
              <p className="problem-text"><strong>{p.title}</strong> {p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
