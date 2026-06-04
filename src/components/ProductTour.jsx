import { useState } from 'react'

const TABS = ['Dashboard', 'Clientes', 'Projetos', 'Tarefas']

function MockupFrame({ url, children }) {
  return (
    <div className="mockup-frame">
      <div className="mockup-titlebar">
        <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
        <div className="mockup-url">{url}</div>
      </div>
      <div className="tour-mock-inner">{children}</div>
    </div>
  )
}

function DashboardTab() {
  return (
    <MockupFrame url="app.mezuri.com.br">
      <div className="tour-mock-header">
        <div className="mock-title">Dashboard</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div className="mock-date">📅 17/10–17/11/2025</div>
          <div className="mock-btn">Exportar relatório</div>
        </div>
      </div>
      <div className="t-stats">
        {[
          { label: 'Finalizadas', val: '372', delta: '↑ 20%', up: true },
          { label: 'Atrasadas', val: '19', delta: '↓ 12%', up: true },
          { label: 'Pendências', val: '28', delta: '↑ 8%', up: false },
          { label: 'Score geral', val: '9.8', delta: '↑ 0.6', up: true, green: true },
        ].map((s, i) => (
          <div key={i} className="t-stat">
            <div className="t-stat-label">{s.label}</div>
            <div className={`t-stat-val${s.green ? ' green' : ''}`}>{s.val}</div>
            <div className={`t-delta ${s.up ? 'up' : 'dn'}`}>{s.delta} mês anterior</div>
          </div>
        ))}
      </div>
      <table className="t-table">
        <thead><tr><th>Arquiteto</th><th>Abertas</th><th>Atrasadas</th><th>Finalizadas</th><th>Score</th></tr></thead>
        <tbody>
          {[['Ana Julia',54,0,54,'10.0','t-sg'],['Bruno Maia',33,0,32,'9.9','t-sg'],['Clara Fonseca',15,3,38,'8.1','t-sm'],['Felipe Vasconcelos',24,12,15,'5.4','t-sb'],['Gabriel Braga',10,2,38,'6.8','t-sm']].map(([n,a,at,f,s,cls],i) => (
            <tr key={i}><td>{n}</td><td>{a}</td><td>{at}</td><td>{f}</td><td className={cls}>{s}</td></tr>
          ))}
        </tbody>
      </table>
    </MockupFrame>
  )
}

function ClientesTab() {
  return (
    <MockupFrame url="app.mezuri.com.br / clientes">
      <div className="tour-mock-header"><div className="mock-title">Pessoa Física</div><div className="mock-btn">+ Novo</div></div>
      <div style={{ display: 'flex', gap: 6, marginBottom: '1rem' }}>
        <div style={{ flex: 1, border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', fontSize: '0.75rem', color: 'var(--muted-fg)' }}>Buscar</div>
        <div className="mock-btn">Pesquisar</div>
      </div>
      <table className="t-table">
        <thead><tr><th>ID</th><th>Nome completo</th><th>Email</th><th>Telefone</th></tr></thead>
        <tbody>
          {[['001','Lucas Almeida Ribeiro','(11) 91234-5678'],['002','Mariana Silva Costa','(21) 99876-5432'],['003','Pedro Henrique Souza','(31) 93456-7890'],['004','Ana Beatriz Fernandes','(41) 98765-4321'],['005','João Victor Lima','(51) 97654-3210']].map(([id,name,tel],i) => (
            <tr key={i}><td>{id}</td><td>{name}</td><td style={{ color: 'var(--muted-fg)' }}>···@email.com</td><td>{tel}</td></tr>
          ))}
        </tbody>
      </table>
    </MockupFrame>
  )
}

function ProjetosTab() {
  const names = ['Ana Martins','André Oliveira','Beatriz Santos','Bruno Almeida','Camila Rocha','Carlos Henrique']
  return (
    <MockupFrame url="app.mezuri.com.br / projetos">
      <div className="tour-mock-header"><div className="mock-title">Meus projetos</div><div className="mock-btn">+ Novo</div></div>
      <div className="proj-grid">
        {names.map((n, i) => (
          <div key={i} className="proj-card">
            <div className="proj-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <span>{n}</span>
          </div>
        ))}
      </div>
    </MockupFrame>
  )
}

function TarefasTab() {
  const tasks = [
    { name: 'Levantamento de Projeto', proj: 'Pousada Vila do Sol', status: 'A fazer', cls: 'ts-todo' },
    { name: 'Planta de Paginação de P...', proj: 'Pousada Vila do Sol', status: 'Fazendo', cls: 'ts-doing' },
    { name: 'Renderização 3D – Área S...', proj: 'Pousada Vila do Sol', status: 'Pendência', cls: 'ts-pending' },
  ]
  return (
    <MockupFrame url="app.mezuri.com.br / tarefas">
      <div className="tour-mock-header"><div className="mock-title">Em aberto</div><div className="mock-btn">+ Adicionar</div></div>
      {tasks.map((t, i) => (
        <div key={i} className="task-row">
          <span className="task-name-c">{t.name}</span>
          <span className="task-proj-c">{t.proj}</span>
          <span className={`task-status ${t.cls}`}>{t.status}</span>
        </div>
      ))}
    </MockupFrame>
  )
}

const TAB_CONTENT = {
  Dashboard: {
    tag: 'Dashboard',
    title: 'Visão geral do escritório em tempo real',
    text: 'O gerente vê o desempenho de cada arquiteto em uma tela só. Tarefas abertas, atrasadas, finalizadas e score individual. Sem precisar perguntar nada.',
    points: ['Score por arquiteto calculado automaticamente', 'Comparativo com o mês anterior', 'Exportação de relatórios'],
    mockup: <DashboardTab />,
  },
  Clientes: {
    tag: 'Clientes',
    title: 'Cadastro completo de clientes',
    text: 'Todos os clientes do escritório em um lugar só. Pessoa física ou jurídica, com busca rápida e dados completos.',
    points: ['Pessoa física e jurídica separados', 'Busca e ordenação em tempo real', 'Vinculação direta com projetos'],
    mockup: <ClientesTab />,
  },
  Projetos: {
    tag: 'Projetos',
    title: 'Todos os projetos organizados e acessíveis',
    text: 'Cada projeto tem seu espaço no mezuri. Arquivos, plantas, tarefas e histórico reunidos. Projetos podem ser compartilhados com controle de acesso.',
    points: ['Meus projetos e projetos compartilhados', 'Upload de plantas e arquivos DWG', 'Histórico completo de versões'],
    mockup: <ProjetosTab />,
  },
  Tarefas: {
    tag: 'Tarefas',
    title: 'Cada tarefa com responsável, prazo e status',
    text: 'Crie tarefas vinculadas a projetos e clientes, atribua responsáveis, defina prioridade e prazo. O sistema acompanha tudo e alerta sobre atrasos.',
    points: ['Prioridade alta, média ou baixa', 'Status: a fazer, fazendo, pendência', 'Alertas automáticos de prazo'],
    mockup: <TarefasTab />,
  },
}

export default function ProductTour() {
  const [active, setActive] = useState('Dashboard')
  const content = TAB_CONTENT[active]

  return (
    <section className="tour-section">
      <div className="container">
        <div className="section-badge fade-up">O produto</div>
        <h2 className="section-title fade-up">Veja o mezuri<br /><span className="muted">por dentro.</span></h2>
        <p className="section-sub fade-up" style={{ marginBottom: '2.5rem' }}>
          Cada tela foi pensada para a rotina de quem trabalha em escritório de arquitetura.
        </p>

        <div className="tour-tabs fade-up">
          {TABS.map(tab => (
            <button key={tab} className={`tour-tab${active === tab ? ' active' : ''}`} onClick={() => setActive(tab)}>{tab}</button>
          ))}
        </div>

        <div className="tour-panel active">
          <div>
            <div className="tour-tag">{content.tag}</div>
            <h3 className="tour-title">{content.title}</h3>
            <p className="tour-text">{content.text}</p>
            <div className="tour-points">
              {content.points.map((p, i) => (
                <div key={i} className="tour-point"><span className="tp-dot" />{p}</div>
              ))}
            </div>
          </div>
          <div>{content.mockup}</div>
        </div>
      </div>
    </section>
  )
}
