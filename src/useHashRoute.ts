import { useEffect, useState } from 'react'
import { navItems, type RouteKey } from './siteData'

function normalizeRoute(raw: string): RouteKey {
  const normalized = raw.replace(/^#\/?/, '').replace(/\/+$/, '').split('/')[0]
  const found = navItems.find((item) => item.key === normalized)
  return found?.key ?? 'home'
}

export function getRouteFromLocation(pathname: string, hash = ''): RouteKey {
  if (hash) {
    const fromHash = normalizeRoute(hash)
    if (fromHash !== 'home' || hash.includes('home')) {
      return fromHash
    }
  }

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .filter((segment) => segment !== 'index.html')

  const lastSegment = segments.at(-1) ?? 'home'
  return normalizeRoute(lastSegment)
}

export function getRouteHref(currentRoute: RouteKey, nextRoute: RouteKey) {
  if (currentRoute === nextRoute) {
    return nextRoute === 'home' ? './' : './'
  }

  if (currentRoute === 'home') {
    return nextRoute === 'home' ? './' : `./${nextRoute}/`
  }

  return nextRoute === 'home' ? '../' : `../${nextRoute}/`
}

export function useHashRoute(initialRoute?: RouteKey) {
  const [route, setRoute] = useState<RouteKey>(() => {
    if (initialRoute) {
      return initialRoute
    }

    if (typeof window === 'undefined') {
      return 'home'
    }

    return getRouteFromLocation(window.location.pathname, window.location.hash)
  })

  useEffect(() => {
    const onChange = () => setRoute(getRouteFromLocation(window.location.pathname, window.location.hash))
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  return { route }
}
