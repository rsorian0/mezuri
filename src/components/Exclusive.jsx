const WA_LINK = 'https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri'

export default function Exclusive() {
  function scrollToAgendar(e) {
    e.preventDefault()
    const el = document.getElementById('agendar')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }
  return (
    <section className="exclusive-section" id="exclusividade" data-section="exclusividade">
      <div className="container">
        <div className="exclusive-grid">
          <div>
            <div className="section-badge fade-up">Para quem é</div>
            <h2 className="section-title fade-up">Feito para escritório,<br /><span className="muted">não para autônomo.</span></h2>
            <p className="section-sub fade-up">O mezuri é um sistema de gestão de equipe. Ele só funciona quando existe uma estrutura para gerir. Por isso vendemos apenas para escritórios com CNPJ.</p>
            <a href="#agendar" className="btn-white btn-lg fade-up" style={{ marginTop: '2rem', padding: '0.7rem 1.6rem', display: 'inline-flex' }} onClick={scrollToAgendar}>
              Quero agendar um diagnóstico
            </a>
          </div>
          <div className="rules">
            <div className="rule fade-up"><div className="rule-check" /><p className="rule-text"><strong>Apenas para CNPJ.</strong> Não atendemos arquitetos autônomos nem CPF.</p></div>
            <div className="rule fade-up"><div className="rule-check" /><p className="rule-text"><strong>Treinamento obrigatório.</strong> Não existe mezuri sem implantação. Faz parte do produto.</p></div>
            <div className="rule fade-up"><div className="rule-check" /><p className="rule-text"><strong>Proposta personalizada.</strong> O valor é definido depois do diagnóstico, de acordo com o tamanho e a realidade do escritório.</p></div>
            <div className="rule fade-up"><div className="rule-check" /><p className="rule-text"><strong>Apenas para arquitetura.</strong> Não atendemos outros segmentos. A especialização é total.</p></div>
            <div className="rule fade-up"><div className="rule-check" /><p className="rule-text"><strong>Assinatura contínua.</strong> O escritório usa todo mês com suporte ativo e evolução constante.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
