import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('mezuri_cookies')) setVisible(true)
  }, [])

  function hide() { setVisible(false) }

  function accept() {
    localStorage.setItem('mezuri_cookies', JSON.stringify({ essential: true, analytics: true, marketing: true }))
    hide()
  }
  function reject() {
    localStorage.setItem('mezuri_cookies', JSON.stringify({ essential: true, analytics: false, marketing: false }))
    hide()
  }
  function save() {
    localStorage.setItem('mezuri_cookies', JSON.stringify({ essential: true, analytics, marketing }))
    hide()
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      {step === 1 && (
        <div className="cookie-step1">
          <p>Usamos cookies para melhorar sua experiência. Você pode aceitar todos ou personalizar suas preferências. <a href="#">Política de privacidade</a>.</p>
          <div className="cookie-step1-actions">
            <button className="cbtn cbtn-ghost" onClick={() => setStep(2)}>Personalizar</button>
            <button className="cbtn cbtn-outline" onClick={reject}>Recusar</button>
            <button className="cbtn cbtn-white" onClick={accept}>Aceitar todos</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="cookie-step2 active">
          <div className="cookie-step2-title">Preferências de cookies</div>
          <div className="cookie-step2-sub">Escolha quais categorias você aceita. Os cookies essenciais não podem ser desativados.</div>
          <div className="cookie-options">
            <div className="cookie-option">
              <div className="cookie-option-header">
                <span className="cookie-option-name">Essenciais</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="cookie-required">Obrigatório</span>
                  <label className="toggle"><input type="checkbox" checked disabled /><span className="toggle-slider" /></label>
                </div>
              </div>
              <p className="cookie-option-desc">Necessários para o funcionamento básico do site.</p>
            </div>
            <div className="cookie-option">
              <div className="cookie-option-header">
                <span className="cookie-option-name">Analíticos</span>
                <label className="toggle"><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /><span className="toggle-slider" /></label>
              </div>
              <p className="cookie-option-desc">Nos ajudam a entender como os visitantes usam o site, de forma anônima.</p>
            </div>
            <div className="cookie-option">
              <div className="cookie-option-header">
                <span className="cookie-option-name">Marketing</span>
                <label className="toggle"><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} /><span className="toggle-slider" /></label>
              </div>
              <p className="cookie-option-desc">Usados para exibir conteúdo relevante e medir campanhas.</p>
            </div>
          </div>
          <div className="cookie-step2-actions">
            <button className="cbtn cbtn-outline" onClick={reject}>Recusar todos</button>
            <button className="cbtn cbtn-white" onClick={save}>Salvar preferências</button>
            <button className="cbtn cbtn-white" onClick={accept}>Aceitar todos</button>
          </div>
        </div>
      )}
    </div>
  )
}
