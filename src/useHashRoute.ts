import { useEffect, useState } from 'react'
import { navItems, type RouteKey } from './siteData'

function getRouteFromHash(): RouteKey {
  const normalized = window.location.hash.replace(/^#\/?/, '').split('/')[0]
  const found = navItems.find((item) => item.key === normalized)
  return found?.key ?? 'home'
}

export function useHashRoute() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash())

  useEffect(() => {
    const onChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = (nextRoute: RouteKey) => {
    window.location.hash = `/${nextRoute}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { route, navigate }
}
