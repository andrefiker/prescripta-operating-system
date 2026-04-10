import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticAppShell } from '../src/AppShell'
import { defaultCompanyProfile } from '../src/companyProfile'
import { navItems, type RouteKey } from '../src/siteData'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')

const routeDescriptions: Record<RouteKey, string> = {
  home: 'Overview executivo da Prescripta com tese, fase e ordem de construcao da empresa.',
  concorrentes: 'Mapa competitivo da Prescripta com gaps de mercado e caminhos de desenvolvimento.',
  comercial: 'ICP, pricing, oferta e motion comercial da Prescripta.',
  compliance: 'Compliance, trust center, risco regulatorio e materiais juridicos da Prescripta.',
  trust: 'Trust Center publico da Prescripta com privacidade, seguranca, IA e documentos-base.',
  documentos: 'Biblioteca documental e workspace editavel da Prescripta.',
  onboarding: 'Onboarding, implantacao e ativacao de clientes da Prescripta.',
  publico: 'Narrativa publica, homepage, pricing e trust center da Prescripta.',
  proximos: 'Prioridades, contas-alvo e execucao comercial da Prescripta.',
  stress: 'Stress test de produto, retencao, migracao e pricing da Prescripta.',
}

function applyMeta(html: string, route: RouteKey) {
  const currentNav = navItems.find((item) => item.key === route)
  const pageTitle =
    route === 'home' ? 'Prescripta Operating System' : `Prescripta Operating System | ${currentNav?.label ?? route}`
  const description = routeDescriptions[route]

  return html
    .replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${pageTitle}" />`)
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
}

function rewriteAssetPaths(html: string, prefix: './' | '../') {
  const assetPrefix = prefix === './' ? './' : '../'
  return html
    .replace(/href="\.\/favicon\.svg"/g, `href="${assetPrefix}favicon.svg"`)
    .replace(/src="\.\/assets\//g, `src="${assetPrefix}assets/`)
    .replace(/href="\.\/assets\//g, `href="${assetPrefix}assets/`)
}

async function writeRoutePage(template: string, route: RouteKey) {
  const markup = renderToStaticMarkup(<StaticAppShell route={route} profile={defaultCompanyProfile} />)
  const withMarkup = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  const withMeta = applyMeta(withMarkup, route)

  if (route === 'home') {
    await writeFile(path.join(distDir, 'index.html'), rewriteAssetPaths(withMeta, './'), 'utf8')
    return
  }

  const routeDir = path.join(distDir, route)
  await mkdir(routeDir, { recursive: true })
  await writeFile(path.join(routeDir, 'index.html'), rewriteAssetPaths(withMeta, '../'), 'utf8')
}

async function main() {
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

  for (const item of navItems) {
    await writeRoutePage(template, item.key)
  }

  await writeFile(path.join(distDir, '404.html'), await readFile(path.join(distDir, 'index.html'), 'utf8'), 'utf8')
}

await main()
