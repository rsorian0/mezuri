const WA_LINK = 'https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri'

export default function CTA() {
  return (
    <section className="cta-section" id="agendar" data-section="agendar">
      <div className="container-sm">
        <div className="section-badge fade-up" style={{ display: 'inline-flex' }}>Próximo passo</div>
        <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>
          Pare de gerir<br /><span className="muted">de cabeça.</span>
        </h2>
        <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
          Agende um diagnóstico gratuito. A gente entende como o escritório funciona hoje e apresenta uma proposta alinhada com a realidade de vocês.
        </p>
        <a href={WA_LINK} className="btn btn-primary btn-lg fade-up" target="_blank" rel="noopener">
          Agendar diagnóstico gratuito
        </a>
      </div>
    </section>
  )
}
