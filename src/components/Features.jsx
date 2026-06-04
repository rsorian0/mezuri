export default function Features() {
  return (
    <section className="features-section" id="funcionalidades" data-section="funcionalidades">
      <div className="container">
        <div className="section-badge fade-up">Funcionalidades</div>
        <h2 className="section-title fade-up">O que o mezuri<br /><span className="muted">cobre no dia a dia.</span></h2>
        <div className="features-grid">
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg></div>
            <div className="feature-title">Gestão de projetos e prazos</div>
            <p className="feature-desc">Cada projeto tem etapas, responsáveis e prazos definidos. Sem dúvida sobre quem faz o quê e quando.</p>
          </div>
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
            <div className="feature-title">Alertas automáticos</div>
            <p className="feature-desc">O mezuri avisa automaticamente quem vai atrasar, quem está no limite e quem não entregou. Sem o gestor precisar perguntar.</p>
          </div>
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div className="feature-title">Histórico e rastreabilidade</div>
            <p className="feature-desc">Cada ação registrada com usuário, data e hora. Se alguém sair do escritório, o histórico do projeto fica.</p>
          </div>
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div className="feature-title">Visão por papel de usuário</div>
            <p className="feature-desc">O arquiteto vê só o que é dele. O gerente vê tudo. Cada um recebe a informação certa, sem excesso.</p>
          </div>
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
            <div className="feature-title">Versionamento de entregas</div>
            <p className="feature-desc">Cada versão entregue fica registrada com descrição, autor e data. O processo documentado do início ao fim.</p>
          </div>
          <div className="feature-card fade-up">
            <div className="feature-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
            <div className="feature-title">Score de desempenho</div>
            <p className="feature-desc">Cada arquiteto tem um score calculado com base em entregas, atrasos e pendências. O gestor cobra com dados, não com impressão.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
