const RULES = [
  { title: 'Apenas para CNPJ.', text: 'Não atendemos arquitetos autônomos nem CPF.' },
  { title: 'Treinamento obrigatório.', text: 'Não existe mezuri sem implantação. Faz parte do produto.' },
  { title: 'Proposta personalizada.', text: 'O valor é definido depois do diagnóstico, de acordo com o tamanho e a realidade do escritório.' },
  { title: 'Apenas para arquitetura.', text: 'Não atendemos outros segmentos. A especialização é total.' },
  { title: 'Assinatura contínua.', text: 'O escritório usa todo mês com suporte ativo e evolução constante.' },
]

const WA_LINK = 'https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri'

export default function Exclusive() {
  return (
    <section className="exclusive-section" id="exclusividade" data-section="exclusividade">
      <div className="container">
        <div className="exclusive-grid">
          <div>
            <div className="section-badge fade-up">Para quem é</div>
            <h2 className="section-title fade-up">
              Feito para escritório,<br /><span className="muted">não para autônomo.</span>
            </h2>
            <p className="section-sub fade-up">
              O mezuri é um sistema de gestão de equipe. Ele só funciona quando existe uma estrutura para gerir. Por isso vendemos apenas para escritórios com CNPJ.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn-white btn-lg fade-up" style={{ marginTop: '2rem', padding: '0.7rem 1.6rem', display: 'inline-flex' }}>
              Quero agendar um diagnóstico
            </a>
          </div>
          <div className="rules">
            {RULES.map((r, i) => (
              <div key={i} className="rule fade-up">
                <div className="rule-check" />
                <p className="rule-text"><strong>{r.title}</strong> {r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
