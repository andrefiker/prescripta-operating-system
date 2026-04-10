import type { Dispatch, SetStateAction } from 'react'
import { defaultCompanyProfile, type CompanyProfile } from './companyProfile'
import { navItems, type RouteKey } from './siteData'
import { renderRoute } from './sitePages'
import { useCompanyProfile } from './useCompanyProfile'
import { getRouteHref, useHashRoute } from './useHashRoute'

type AppLayoutProps = {
  route: RouteKey
  profile: CompanyProfile
  setProfile: Dispatch<SetStateAction<CompanyProfile>>
}

function AppLayout({ route, profile, setProfile }: AppLayoutProps) {
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
            <a
              key={item.key}
              href={getRouteHref(route, item.key)}
              className={item.key === route ? 'nav-button active' : 'nav-button'}
            >
              <span>{item.kicker}</span>
              <strong>{item.label}</strong>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>Repositorio</p>
          <a href="https://github.com/andrefiker/prescripta-operating-system" target="_blank" rel="noreferrer">
            github.com/andrefiker/prescripta-operating-system
          </a>
        </div>
      </aside>

      <main className="page-shell">{renderRoute(route, profile, setProfile)}</main>
    </div>
  )
}

export function AppShell() {
  const { route } = useHashRoute()
  const { profile, setProfile } = useCompanyProfile()

  return <AppLayout route={route} profile={profile} setProfile={setProfile} />
}

export function StaticAppShell(props: { route: RouteKey; profile?: CompanyProfile }) {
  const noopSetProfile = (() => undefined) as Dispatch<SetStateAction<CompanyProfile>>

  return <AppLayout route={props.route} profile={props.profile ?? defaultCompanyProfile} setProfile={noopSetProfile} />
}
