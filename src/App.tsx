import './App.css'
import { useHashRoute } from './useHashRoute'
import { navItems } from './siteData'
import { renderRoute } from './sitePages'

function App() {
  const { route, navigate } = useHashRoute()

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-orb" aria-hidden="true">
            <span />
          </div>
          <div>
            <p className="sidebar-kicker">Prescripta Operating System</p>
            <h1>Empresa SaaS antes do marketing.</h1>
          </div>
        </div>

        <div className="sidebar-intro">
          <p>
            Manual operacional da Prescripta para comercial, compliance, onboarding e narrativa publica. Versao base
            para sair do beta improvisado e entrar em uma operacao vendavel.
          </p>
        </div>

        <nav className="sidebar-nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={item.key === route ? 'nav-button active' : 'nav-button'}
              onClick={() => navigate(item.key)}
            >
              <span>{item.kicker}</span>
              <strong>{item.label}</strong>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>Repositorio</p>
          <a href="https://github.com/andrefiker/prescripta-operating-system" target="_blank" rel="noreferrer">
            github.com/andrefiker/prescripta-operating-system
          </a>
        </div>
      </aside>

      <main className="page-shell">{renderRoute(route)}</main>
    </div>
  )
}

export default App
