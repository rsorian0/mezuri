import { useState } from 'react'

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'tarefas', label: 'Tarefas' },
]

function Titlebar({ url }) {
  return (
    <div className="mockup-titlebar">
      <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
      <div className="mockup-url">{url}</div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="mockup-frame">
      <Titlebar url="app.mezuri.com.br" />
      <div className="tour-mock-inner">
        <div className="tour-mock-header">
          <div className="mock-title">Dashboard</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div className="mock-date">📅 17/10–17/11/2025</div>
            <div className="mock-btn">Exportar relatório</div>
          </div>
        </div>
        <div className="t-stats">
          <div className="t-stat"><div className="t-stat-label">Finalizadas</div><div className="t-stat-val">372</div><div className="t-delta up">↑ 20% mês anterior</div></div>
          <div className="t-stat"><div className="t-stat-label">Atrasadas</div><div className="t-stat-val">19</div><div className="t-delta dn">↓ 12% mês anterior</div></div>
          <div className="t-stat"><div className="t-stat-label">Pendências</div><div className="t-stat-val">28</div><div className="t-delta dn">↑ 8% mês anterior</div></div>
          <div className="t-stat"><div className="t-stat-label">Score geral</div><div className="t-stat-val green">9.8</div><div className="t-delta up">↑ 0.6 mês anterior</div></div>
        </div>
        <table className="t-table">
          <thead><tr><th>Arquiteto</th><th>Abertas</th><th>Atrasadas</th><th>Finalizadas</th><th>Score</th></tr></thead>
          <tbody>
            <tr><td>Ana Julia</td><td>54</td><td>0</td><td>54</td><td className="t-sg">10.0</td></tr>
            <tr><td>Bruno Maia</td><td>33</td><td>0</td><td>32</td><td className="t-sg">9.9</td></tr>
            <tr><td>Clara Fonseca</td><td>15</td><td>3</td><td>38</td><td className="t-sm">8.1</td></tr>
            <tr><td>Felipe Vasconcelos</td><td>24</td><td>12</td><td>15</td><td className="t-sb">5.4</td></tr>
            <tr><td>Gabriel Braga</td><td>10</td><td>2</td><td>38</td><td className="t-sm">6.8</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ClientesMockup() {
  return (
    <div className="mockup-frame">
      <Titlebar url="app.mezuri.com.br / clientes" />
      <div className="tour-mock-inner">
        <div className="tour-mock-header"><div className="mock-title">Pessoa Física</div><div className="mock-btn">+ Novo</div></div>
        <div style={{ display: 'flex', gap: 6, marginBottom: '1rem' }}>
          <div style={{ flex: 1, border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', fontSize: '0.75rem', color: 'var(--muted-fg)' }}>Buscar</div>
          <div className="mock-btn">Pesquisar</div>
        </div>
        <table className="t-table">
          <thead><tr><th>ID</th><th>Nome completo</th><th>Email</th><th>Telefone</th></tr></thead>
          <tbody>
            <tr><td>001</td><td>Lucas Almeida Ribeiro</td><td style={{ color: 'var(--muted-fg)' }}>lucas.ribeiro@...</td><td>(11) 91234-5678</td></tr>
            <tr><td>002</td><td>Mariana Silva Costa</td><td style={{ color: 'var(--muted-fg)' }}>mariana.costa@...</td><td>(21) 99876-5432</td></tr>
            <tr><td>003</td><td>Pedro Henrique Souza</td><td style={{ color: 'var(--muted-fg)' }}>pedro.souza@...</td><td>(31) 93456-7890</td></tr>
            <tr><td>004</td><td>Ana Beatriz Fernandes</td><td style={{ color: 'var(--muted-fg)' }}>ana.fernande@...</td><td>(41) 98765-4321</td></tr>
            <tr><td>005</td><td>João Victor Lima</td><td style={{ color: 'var(--muted-fg)' }}>joao.lima@...</td><td>(51) 97654-3210</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ProjetosMockup() {
  const names = ['Ana Martins', 'André Oliveira', 'Beatriz Santos', 'Bruno Almeida', 'Camila Rocha', 'Carlos Henrique']
  return (
    <div className="mockup-frame">
      <Titlebar url="app.mezuri.com.br / projetos" />
      <div className="tour-mock-inner">
        <div className="tour-mock-header"><div className="mock-title">Meus projetos</div><div className="mock-btn">+ Novo</div></div>
        <div className="proj-grid">
          {names.map((n, i) => (
            <div key={i} className="proj-card">
              <div className="proj-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
              <span>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TarefasMockup() {
  return (
    <div className="mockup-frame">
      <Titlebar url="app.mezuri.com.br / tarefas" />
      <div className="tour-mock-inner">
        <div className="tour-mock-header"><div className="mock-title">Em aberto</div><div className="mock-btn">+ Adicionar</div></div>
        <div className="task-row"><span className="task-name-c">Levantamento de Projeto</span><span className="task-proj-c">Pousada Vila do Sol</span><span className="task-status ts-todo">A fazer</span></div>
        <div className="task-row"><span className="task-name-c">Planta de Paginação de P...</span><span className="task-proj-c">Pousada Vila do Sol</span><span className="task-status ts-doing">Fazendo</span></div>
        <div className="task-row"><span className="task-name-c">Renderização 3D – Área S...</span><span className="task-proj-c">Pousada Vila do Sol</span><span className="task-status ts-pending">Pendência</span></div>
      </div>
    </div>
  )
}

const CONTENT = {
  dashboard: {
    tag: 'Dashboard', title: 'Visão geral do escritório em tempo real',
    text: 'O gerente vê o desempenho de cada arquiteto em uma tela só. Tarefas abertas, atrasadas, finalizadas e score individual. Sem precisar perguntar nada.',
    points: ['Score por arquiteto calculado automaticamente', 'Comparativo com o mês anterior', 'Exportação de relatórios'],
    mockup: <DashboardMockup />,
  },
  clientes: {
    tag: 'Clientes', title: 'Cadastro completo de clientes',
    text: 'Todos os clientes do escritório em um lugar só. Pessoa física ou jurídica, com busca rápida e dados completos.',
    points: ['Pessoa física e jurídica separados', 'Busca e ordenação em tempo real', 'Vinculação direta com projetos'],
    mockup: <ClientesMockup />,
  },
  projetos: {
    tag: 'Projetos', title: 'Todos os projetos organizados e acessíveis',
    text: 'Cada projeto tem seu espaço no mezuri. Arquivos, plantas, tarefas e histórico reunidos. Projetos podem ser compartilhados com controle de acesso.',
    points: ['Meus projetos e projetos compartilhados', 'Upload de plantas e arquivos DWG', 'Histórico completo de versões'],
    mockup: <ProjetosMockup />,
  },
  tarefas: {
    tag: 'Tarefas', title: 'Cada tarefa com responsável, prazo e status',
    text: 'Crie tarefas vinculadas a projetos e clientes, atribua responsáveis, defina prioridade e prazo. O sistema acompanha tudo e alerta sobre atrasos.',
    points: ['Prioridade alta, média ou baixa', 'Status: a fazer, fazendo, pendência', 'Alertas automáticos de prazo'],
    mockup: <TarefasMockup />,
  },
}

export default function ProductTour() {
  const [active, setActive] = useState('dashboard')
  const c = CONTENT[active]

  return (
    <section className="tour-section">
      <div className="container">
        <div className="section-badge fade-up">O produto</div>
        <h2 className="section-title fade-up">Veja o mezuri<br /><span className="muted">por dentro.</span></h2>
        <p className="section-sub fade-up" style={{ marginBottom: '2.5rem' }}>
          Cada tela foi pensada para a rotina de quem trabalha em escritório de arquitetura.
        </p>
        <div className="tour-tabs fade-up">
          {TABS.map(t => (
            <button key={t.id} className={`tour-tab${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>{t.label}</button>
          ))}
        </div>
        <div className="tour-panel active">
          <div>
            <div className="tour-tag">{c.tag}</div>
            <h3 className="tour-title">{c.title}</h3>
            <p className="tour-text">{c.text}</p>
            <div className="tour-points">
              {c.points.map((p, i) => (
                <div key={i} className="tour-point"><span className="tp-dot" />{p}</div>
              ))}
            </div>
          </div>
          <div>{c.mockup}</div>
        </div>
      </div>
    </section>
  )
}
