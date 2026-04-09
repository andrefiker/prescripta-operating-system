import type { ReactNode } from 'react'
import {
  channels,
  clauseBlocks,
  complianceMatrix,
  compliancePanels,
  crmFields,
  csMetrics,
  documentInventory,
  documentTemplates,
  executiveMetrics,
  icpPanels,
  objectionCards,
  offers,
  onboardingChecklists,
  onboardingTimeline,
  phasePanels,
  publicBlueprint,
  roadmap,
  stats,
  thesisPanels,
  trustChecklist,
  type Offer,
  type PanelData,
  type RouteKey,
} from './siteData'

export function renderRoute(route: RouteKey) {
  switch (route) {
    case 'comercial':
      return <CommercialPage />
    case 'compliance':
      return <CompliancePage />
    case 'documentos':
      return <DocumentsPage />
    case 'onboarding':
      return <OnboardingPage />
    case 'publico':
      return <PublicSitePage />
    default:
      return <HomePage />
  }
}

function HomePage() {
  return (
    <PageFrame
      kicker="Overview"
      title="Tese, fase e ordem de construcao da Prescripta como empresa."
      intro="A Prescripta nao precisa esperar o produto estar completo para virar empresa. Ela precisa definir categoria, politica de beta, pacote juridico minimo e uma sequencia disciplinada de venda, onboarding e trust."
    >
      <section className="hero-board">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="eyebrow">{stat.label}</p>
            <h3>{stat.value}</h3>
            <p>{stat.note}</p>
          </article>
        ))}
      </section>

      <SectionTitle
        eyebrow="Tese"
        title="Primeiro fechar a ideia economica do negocio."
        text="O objetivo nao e so ter software funcional. E ter uma empresa com narrativa defensavel, buyer claro e uma promessa que sobreviva a site, proposta, contrato, onboarding e diligencia."
      />
      <div className="panel-grid three">
        {thesisPanels.map((panel) => (
          <InsightPanel key={panel.title} panel={panel} />
        ))}
      </div>

      <SectionTitle
        eyebrow="Fase"
        title="Beta com disciplina, nao beta eterno."
        text="A linguagem publica precisa refletir o estagio real da Prescripta. E o beta precisa ter dono, prazo e criterio de conversao."
      />
      <div className="panel-grid three">
        {phasePanels.map((panel) => (
          <InsightPanel key={panel.title} panel={panel} />
        ))}
      </div>

      <section className="note-band">
        <p className="eyebrow">Regra executiva</p>
        <h3>O mercado nao pode aprender que a Prescripta e gratuita, indefinida ou "mais uma IA de saude".</h3>
      </section>

      <SectionTitle
        eyebrow="Roadmap"
        title="A ordem importa mais do que a quantidade de iniciativas."
        text="Antes de escalar canal, a empresa precisa travar ICP, pricing, pacote juridico, proposta, onboarding e prova de ativacao."
      />
      <div className="panel-grid three">
        {roadmap.map((item) => (
          <article key={item.phase} className="roadmap-card">
            <p className="roadmap-phase">{item.phase}</p>
            <h3>{item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function CommercialPage() {
  return (
    <PageFrame
      kicker="Comercial"
      title="ICP, oferta, pricing, funil, deck, one-pager e proposta."
      intro="A maquina comercial da Prescripta precisa transformar uma tese estreita em rotina de venda repetivel. Isso inclui buyer certo, pricing por fase, CRM disciplinado e materiais que nao prometam mais do que a empresa consegue sustentar."
    >
      <SectionTitle
        eyebrow="ICP"
        title="Comecar com os compradores certos."
        text="O ICP deve ser escolhido pela clareza da dor, pela chance de ativacao e pela capacidade de pagar por processo e governanca."
      />
      <div className="panel-grid three">
        {icpPanels.map((panel) => (
          <InsightPanel key={panel.title} panel={panel} />
        ))}
      </div>

      <SectionTitle
        eyebrow="Oferta e pricing"
        title="Precificar por complexidade operacional e valor economico."
        text="O setup pago aparece onde implantacao realmente muda o sucesso da conta. Founder pricing pode existir, mas como excecao governada, nao como bagunca comercial."
      />
      <div className="offer-grid">
        {offers.map((offer) => (
          <OfferCard key={offer.name} offer={offer} />
        ))}
      </div>

      <div className="split-layout">
        <article className="sheet">
          <p className="eyebrow">Canais prioritarios</p>
          <h3>Onde vender primeiro</h3>
          <ul>
            {channels.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="sheet">
          <p className="eyebrow">CRM minimo</p>
          <h3>Campos obrigatorios por deal</h3>
          <ul>
            {crmFields.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <SectionTitle
        eyebrow="Objecoes"
        title="Objecoes de venda precisam de resposta padrao."
        text="Se cada conversa responde de um jeito, a empresa cria risco e perde taxa de conversao."
      />
      <div className="panel-grid two">
        {objectionCards.map((card) => (
          <article key={card.title} className="insight-panel">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function CompliancePage() {
  return (
    <PageFrame
      kicker="Compliance"
      title="Mapa juridico minimo vendavel, trust center e risco regulatorio."
      intro="Em saude, compliance nao e acessorio. E parte da oferta, do fechamento do contrato e da retencao."
    >
      <div className="panel-grid three">
        {compliancePanels.map((panel) => (
          <InsightPanel key={panel.title} panel={panel} />
        ))}
      </div>

      <section className="warning-panel">
        <p className="eyebrow">Diretriz executiva</p>
        <h3>Separar o que ja e claim valido do que ainda e roadmap regulatorio.</h3>
        <p>Especialmente para controlados, assinatura qualificada e SNCR.</p>
      </section>

      <div className="split-layout">
        <article className="sheet">
          <p className="eyebrow">Trust center minimo</p>
          <h3>Checklist publico</h3>
          <ul>
            {trustChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="sheet">
          <p className="eyebrow">Regra pratica</p>
          <h3>Se o claim nao sobreviver ao contrato, ele nao deve ir ao marketing.</h3>
          <p>Toda frase sobre seguranca, LGPD, IA ou regulacao precisa existir da mesma forma em todos os materiais.</p>
        </article>
      </div>

      <SectionTitle
        eyebrow="Matriz"
        title="Cada workstream precisa de responsavel claro."
        text="Sem dono, a empresa acumula pendencias de risco. E sem urgencia explicita, tudo parece poder esperar."
      />
      <div className="matrix">
        <div className="matrix-row matrix-head">
          <span>Workstream</span>
          <span>Dono</span>
          <span>Urgencia</span>
        </div>
        {complianceMatrix.map((row) => (
          <div className="matrix-row" key={row[0]}>
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span>{row[2]}</span>
          </div>
        ))}
      </div>
    </PageFrame>
  )
}

function DocumentsPage() {
  return (
    <PageFrame
      kicker="Documentos"
      title="Templates quase finais para comercial, juridico e trust."
      intro="Esses blocos nao substituem redacao juridica final, mas deixam a empresa a um passo de sair do improviso."
    >
      <div className="template-grid two">
        {documentTemplates.map((template) => (
          <article key={template.title} className="template-sheet">
            <p className="eyebrow">Template</p>
            <h3>{template.title}</h3>
            <ol>
              {template.body.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <SectionTitle
        eyebrow="Textos-base"
        title="Blocos quase prontos para uso comercial e juridico."
        text="Aqui o objetivo ja nao e listar topicos, e sim oferecer linguagem-base que pode ser refinada pelo juridico ou pela equipe comercial."
      />
      <div className="panel-grid two">
        {clauseBlocks.map((block) => (
          <article key={block.title} className="insight-panel">
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </article>
        ))}
      </div>

      <SectionTitle
        eyebrow="Inventario"
        title="Pacote documental completo da empresa."
        text="A Prescripta nao precisa virar corporacao antes da hora, mas precisa ter um minimo serio para nao negociar risco no escuro."
      />
      <div className="panel-grid two">
        {documentInventory.map((group) => (
          <article key={group.group} className="insight-panel">
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function OnboardingPage() {
  return (
    <PageFrame
      kicker="Onboarding"
      title="Implantacao, ativacao e customer success desde o primeiro contrato pago."
      intro="O valor da Prescripta aparece quando medico e operacao administrativa trabalham no mesmo fluxo. Por isso onboarding e CS precisam nascer junto com a venda."
    >
      <div className="timeline">
        {onboardingTimeline.map((item, index) => (
          <article key={item[0]} className="timeline-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="panel-grid three">
        {onboardingChecklists.map((list) => (
          <article key={list.title} className="insight-panel">
            <h3>{list.title}</h3>
            <ul>
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="split-layout">
        <article className="sheet">
          <p className="eyebrow">Metricas de CS</p>
          <h3>Como medir se a conta realmente entrou em rotina.</h3>
          <ul>
            {csMetrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="sheet">
          <p className="eyebrow">Regra de ouro</p>
          <h3>Conta que nao ativou nao deve ser tratada como cliente saudavel.</h3>
          <p>O primeiro objetivo do CS nao e encantar. E colocar a operacao do cliente em um fluxo estavel e repetivel.</p>
        </article>
      </div>
    </PageFrame>
  )
}

function PublicSitePage() {
  return (
    <PageFrame
      kicker="Site Publico"
      title="Blueprint da versao apresentavel da Prescripta e da sua expansao de GTM."
      intro="A versao publica deve funcionar como maquina de captacao e confianca. Ela nao precisa despejar todo o manual interno, mas precisa refletir uma empresa organizada."
    >
      <div className="panel-grid three">
        {publicBlueprint.map((panel) => (
          <InsightPanel key={panel.title} panel={panel} />
        ))}
      </div>

      <div className="split-layout">
        <article className="sheet">
          <p className="eyebrow">Metricas obrigatorias</p>
          <h3>Scorecard executivo</h3>
          <ul>
            {executiveMetrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="sheet visual-sheet">
          <p className="eyebrow">Sequencia recomendada</p>
          <h3>Primeiro homepage e pricing. Depois trust. Depois paginas segmentadas. So entao canais.</h3>
          <p>O marketing nao deve correr na frente da prontidao operacional.</p>
        </article>
      </div>
    </PageFrame>
  )
}

function PageFrame(props: { kicker: string; title: string; intro: string; children: ReactNode }) {
  return (
    <div className="page-frame">
      <header className="page-hero">
        <p className="eyebrow">{props.kicker}</p>
        <h2>{props.title}</h2>
        <p className="page-intro">{props.intro}</p>
      </header>
      {props.children}
    </div>
  )
}

function SectionTitle(props: { eyebrow: string; title: string; text: string }) {
  return (
    <header className="section-title">
      <p className="eyebrow">{props.eyebrow}</p>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </header>
  )
}

function InsightPanel({ panel }: { panel: PanelData }) {
  return (
    <article className="insight-panel">
      <h3>{panel.title}</h3>
      <p>{panel.intro}</p>
      <ul>
        {panel.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="offer-card">
      <p className="offer-audience">{offer.audience}</p>
      <h3>{offer.name}</h3>
      <p className="offer-price">{offer.price}</p>
      <p className="offer-setup">{offer.setup}</p>
      <p>{offer.summary}</p>
      <ul>
        {offer.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}
