import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { defaultCompanyProfile, type CompanyProfile } from './companyProfile'
import { buildDocuments } from './documentGenerator'
import {
  channels,
  clauseBlocks,
  complianceMatrix,
  compliancePanels,
  crmFields,
  csMetrics,
  deliverableAssets,
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

export function renderRoute(
  route: RouteKey,
  profile: CompanyProfile,
  setProfile: Dispatch<SetStateAction<CompanyProfile>>,
) {
  switch (route) {
    case 'comercial':
      return <CommercialPage profile={profile} />
    case 'compliance':
      return <CompliancePage profile={profile} />
    case 'documentos':
      return <DocumentsPage profile={profile} setProfile={setProfile} />
    case 'onboarding':
      return <OnboardingPage profile={profile} />
    case 'publico':
      return <PublicSitePage profile={profile} />
    default:
      return <HomePage profile={profile} />
  }
}

function HomePage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageFrame
      kicker="Overview"
      title="Tese, fase e ordem de construcao da Prescripta como empresa."
      intro="A Prescripta nao precisa esperar o produto estar completo para virar empresa. Ela precisa definir categoria, politica de beta, pacote juridico minimo e uma sequencia disciplinada de venda, onboarding e trust."
    >
      <section className="profile-banner">
        <div>
          <p className="eyebrow">Perfil ativo da empresa</p>
          <h3>
            {profile.brandName} | {profile.companyStage}
          </h3>
          <p>
            {profile.coreOffer}. Estrutura atual: {profile.legalStructure}. Motion comercial: {profile.salesMotion}.
          </p>
        </div>
        <div className="profile-banner-meta">
          <span>{profile.primaryIcp}</span>
          <span>{profile.setupPolicy}</span>
        </div>
      </section>

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

function CommercialPage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageFrame
      kicker="Comercial"
      title="ICP, oferta, pricing, funil, deck, one-pager e proposta."
      intro="A maquina comercial da Prescripta precisa transformar uma tese estreita em rotina de venda repetivel. Isso inclui buyer certo, pricing por fase, CRM disciplinado e materiais que nao prometam mais do que a empresa consegue sustentar."
    >
      <section className="profile-snapshot">
        <article className="sheet">
          <p className="eyebrow">Estrutura comercial atual</p>
          <h3>{profile.commercialModel}</h3>
          <ul>
            <li>ICP principal: {profile.primaryIcp}</li>
            <li>ICP secundario: {profile.secondaryIcp}</li>
            <li>Lider comercial: {profile.commercialLead}</li>
            <li>Politica de piloto: {profile.pilotPolicy}</li>
          </ul>
        </article>
        <article className="sheet">
          <p className="eyebrow">Referencia de pricing</p>
          <h3>{profile.brandName} vende implantacao, nao so licenca.</h3>
          <ul>
            <li>Plano de entrada: {profile.startPlanPrice}</li>
            <li>Plano clinica: {profile.clinicPlanPrice}</li>
            <li>Setup: {profile.setupPolicy}</li>
            <li>Oferta central: {profile.coreOffer}</li>
          </ul>
        </article>
      </section>

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

function CompliancePage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageFrame
      kicker="Compliance"
      title="Mapa juridico minimo vendavel, trust center e risco regulatorio."
      intro="Em saude, compliance nao e acessorio. E parte da oferta, do fechamento do contrato e da retencao."
    >
      <section className="profile-snapshot">
        <article className="sheet">
          <p className="eyebrow">Governanca responsavel</p>
          <h3>Contatos que precisam existir nos materiais.</h3>
          <ul>
            <li>Juridico: {profile.legalLead}</li>
            <li>Privacidade / DPO: {profile.dpoContact}</li>
            <li>Suporte: {profile.supportContact}</li>
          </ul>
        </article>
        <article className="sheet">
          <p className="eyebrow">Nota regulatoria atual</p>
          <h3>Claim comercial e roadmap nao podem se misturar.</h3>
          <p>{profile.roadmapNote}</p>
        </article>
      </section>

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

function DocumentsPage(props: {
  profile: CompanyProfile
  setProfile: Dispatch<SetStateAction<CompanyProfile>>
}) {
  const generatedDocuments = buildDocuments(props.profile)
  const tier1Assets = deliverableAssets.filter((asset) => asset.tier === 'Tier 1')
  const tier2Assets = deliverableAssets.filter((asset) => asset.tier === 'Tier 2')
  const tier3Assets = deliverableAssets.filter((asset) => asset.tier === 'Tier 3')

  return (
    <PageFrame
      kicker="Documentos"
      title="Workspace configuravel para documentos exportaveis da Prescripta."
      intro="Preencha a estrutura societaria e comercial real da empresa, gere documentos a partir desse perfil e use a biblioteca final importada como base oficial de envio e apresentacao."
    >
      <section className="document-workbench">
        <article className="sheet profile-sheet">
          <div className="sheet-head">
            <div>
              <p className="eyebrow">Perfil da empresa</p>
              <h3>Campos-base da Prescripta</h3>
            </div>
            <button type="button" className="ghost-button" onClick={() => props.setProfile(defaultCompanyProfile)}>
              Restaurar base
            </button>
          </div>

          <div className="form-grid">
            <FormField
              label="Razao social"
              value={props.profile.legalEntityName}
              onChange={(value) => updateProfile(props.setProfile, 'legalEntityName', value)}
            />
            <FormField
              label="Marca"
              value={props.profile.brandName}
              onChange={(value) => updateProfile(props.setProfile, 'brandName', value)}
            />
            <FormField
              label="Estrutura societaria"
              value={props.profile.legalStructure}
              onChange={(value) => updateProfile(props.setProfile, 'legalStructure', value)}
            />
            <FormField
              label="Sede"
              value={props.profile.headquarters}
              onChange={(value) => updateProfile(props.setProfile, 'headquarters', value)}
            />
            <FormField
              label="Estagio atual"
              value={props.profile.companyStage}
              onChange={(value) => updateProfile(props.setProfile, 'companyStage', value)}
            />
            <FormField
              label="Fundacao"
              value={props.profile.foundingDate}
              onChange={(value) => updateProfile(props.setProfile, 'foundingDate', value)}
            />
            <FormField
              label="Fundadores / socios"
              value={props.profile.founderNames}
              onChange={(value) => updateProfile(props.setProfile, 'founderNames', value)}
            />
            <FormField
              label="Lider comercial"
              value={props.profile.commercialLead}
              onChange={(value) => updateProfile(props.setProfile, 'commercialLead', value)}
            />
            <FormField
              label="Responsavel juridico"
              value={props.profile.legalLead}
              onChange={(value) => updateProfile(props.setProfile, 'legalLead', value)}
            />
            <FormField
              label="Contato de privacidade"
              value={props.profile.dpoContact}
              onChange={(value) => updateProfile(props.setProfile, 'dpoContact', value)}
            />
            <FormField
              label="Contato de suporte"
              value={props.profile.supportContact}
              onChange={(value) => updateProfile(props.setProfile, 'supportContact', value)}
            />
            <FormField
              label="Website"
              value={props.profile.website}
              onChange={(value) => updateProfile(props.setProfile, 'website', value)}
            />
            <FormField
              label="ICP principal"
              value={props.profile.primaryIcp}
              onChange={(value) => updateProfile(props.setProfile, 'primaryIcp', value)}
              textarea
            />
            <FormField
              label="ICP secundario"
              value={props.profile.secondaryIcp}
              onChange={(value) => updateProfile(props.setProfile, 'secondaryIcp', value)}
              textarea
            />
            <FormField
              label="Modelo comercial"
              value={props.profile.commercialModel}
              onChange={(value) => updateProfile(props.setProfile, 'commercialModel', value)}
              textarea
            />
            <FormField
              label="Motion de vendas"
              value={props.profile.salesMotion}
              onChange={(value) => updateProfile(props.setProfile, 'salesMotion', value)}
              textarea
            />
            <FormField
              label="Politica de piloto"
              value={props.profile.pilotPolicy}
              onChange={(value) => updateProfile(props.setProfile, 'pilotPolicy', value)}
              textarea
            />
            <FormField
              label="Oferta central"
              value={props.profile.coreOffer}
              onChange={(value) => updateProfile(props.setProfile, 'coreOffer', value)}
            />
            <FormField
              label="Preco de entrada"
              value={props.profile.startPlanPrice}
              onChange={(value) => updateProfile(props.setProfile, 'startPlanPrice', value)}
            />
            <FormField
              label="Preco de clinica"
              value={props.profile.clinicPlanPrice}
              onChange={(value) => updateProfile(props.setProfile, 'clinicPlanPrice', value)}
            />
            <FormField
              label="Politica de setup"
              value={props.profile.setupPolicy}
              onChange={(value) => updateProfile(props.setProfile, 'setupPolicy', value)}
              textarea
            />
            <FormField
              label="Nota regulatoria"
              value={props.profile.roadmapNote}
              onChange={(value) => updateProfile(props.setProfile, 'roadmapNote', value)}
              textarea
            />
          </div>
        </article>

        <article className="sheet generator-sheet">
          <p className="eyebrow">Geracao exportavel</p>
          <h3>Documentos prontos para copiar ou baixar.</h3>
          <p>
            Cada arquivo abaixo e montado com base no perfil atual da empresa. O ideal e usar isso como camada pre-juridica
            e pre-comercial antes da versao final em PDF, proposta ou minuta.
          </p>

          <div className="document-list">
            {generatedDocuments.map((document) => (
              <article key={document.key} className="generated-document">
                <div className="sheet-head">
                  <div>
                    <p className="eyebrow">Documento</p>
                    <h4>{document.title}</h4>
                    <p>{document.description}</p>
                  </div>
                  <div className="document-actions">
                    <button type="button" className="ghost-button" onClick={() => copyToClipboard(document.content)}>
                      Copiar
                    </button>
                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => downloadText(document.fileName, document.content)}
                    >
                      Baixar .md
                    </button>
                  </div>
                </div>
                <pre>{document.content}</pre>
              </article>
            ))}
          </div>
        </article>
      </section>

      <SectionTitle
        eyebrow="Biblioteca"
        title="Documentos finais baixaveis por tier."
        text="Os PDFs e a planilha abaixo foram atualizados com o pacote otimizado importado para a Prescripta. Os formatos editaveis continuam disponiveis como apoio interno quando existirem."
      />
      <div className="tier-stack">
        <TierSection
          title="Tier 1 | Nao vende sem isso"
          intro="Pacote juridico e comercial minimo para enviar proposta, fechar contrato e sustentar a narrativa da empresa."
          assets={tier1Assets}
        />
        <TierSection
          title="Tier 2 | Onboarding dos primeiros clientes"
          intro="Materiais de implantacao, treinamento, discovery e trust para as primeiras contas pagas."
          assets={tier2Assets}
        />
        <TierSection
          title="Tier 3 | Operacao de pipeline"
          intro="Especificacoes de CRM, projecao de receita, playbook de objecoes e copy de homepage para rodar o comercial."
          assets={tier3Assets}
        />
      </div>

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

function OnboardingPage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageFrame
      kicker="Onboarding"
      title="Implantacao, ativacao e customer success desde o primeiro contrato pago."
      intro="O valor da Prescripta aparece quando medico e operacao administrativa trabalham no mesmo fluxo. Por isso onboarding e CS precisam nascer junto com a venda."
    >
      <section className="note-band compact">
        <p className="eyebrow">Regra de implantacao</p>
        <h3>{profile.brandName} precisa onboardar do jeito que vende.</h3>
        <p>
          O discurso comercial atual e {profile.salesMotion}. O onboarding precisa espelhar isso com kickoff,
          owner definido, juridico operacional e revisao formal de ativacao.
        </p>
      </section>

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

function PublicSitePage({ profile }: { profile: CompanyProfile }) {
  return (
    <PageFrame
      kicker="Site Publico"
      title="Blueprint da versao apresentavel da Prescripta e da sua expansao de GTM."
      intro="A versao publica deve funcionar como maquina de captacao e confianca. Ela nao precisa despejar todo o manual interno, mas precisa refletir uma empresa organizada."
    >
      <section className="profile-snapshot">
        <article className="sheet">
          <p className="eyebrow">Narrativa publica recomendada</p>
          <h3>{profile.coreOffer}</h3>
          <p>
            A homepage deve refletir o estagio real da empresa: {profile.companyStage}. O alvo principal continua sendo{' '}
            {profile.primaryIcp}.
          </p>
        </article>
        <article className="sheet">
          <p className="eyebrow">Claims que precisam bater</p>
          <ul>
            <li>Oferta: {profile.coreOffer}</li>
            <li>Pricing de referencia: {profile.startPlanPrice} ate {profile.clinicPlanPrice}</li>
            <li>Suporte / privacidade: {profile.supportContact} e {profile.dpoContact}</li>
          </ul>
        </article>
      </section>

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

function FormField(props: {
  label: string
  value: string
  onChange: (value: string) => void
  textarea?: boolean
}) {
  return (
    <label className={props.textarea ? 'form-field textarea' : 'form-field'}>
      <span>{props.label}</span>
      {props.textarea ? (
        <textarea value={props.value} onChange={(event) => props.onChange(event.target.value)} rows={4} />
      ) : (
        <input value={props.value} onChange={(event) => props.onChange(event.target.value)} />
      )}
    </label>
  )
}

function updateProfile(
  setProfile: Dispatch<SetStateAction<CompanyProfile>>,
  field: keyof CompanyProfile,
  value: string,
) {
  setProfile((current) => ({ ...current, [field]: value }))
}

async function copyToClipboard(content: string) {
  if (!navigator.clipboard) {
    return
  }

  await navigator.clipboard.writeText(content)
}

function downloadText(fileName: string, content: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  anchor.click()
  URL.revokeObjectURL(url)
}

function TierSection(props: { title: string; intro: string; assets: typeof deliverableAssets }) {
  const [openPreview, setOpenPreview] = useState<string | null>(null)

  return (
    <section className="tier-section">
      <header className="section-title">
        <h3>{props.title}</h3>
        <p>{props.intro}</p>
      </header>
      <div className="panel-grid two">
        {props.assets.map((asset) => (
          <article key={asset.title} className="deliverable-card">
            <p className="eyebrow">{asset.tier}</p>
            <h3>{asset.title}</h3>
            <p>{asset.summary}</p>
            <div className="document-actions">
              {asset.files.some((file) => file.label === 'PDF') ? (
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setOpenPreview(openPreview === asset.title ? null : asset.title)}
                >
                  {openPreview === asset.title ? 'Fechar preview' : 'Preview PDF'}
                </button>
              ) : null}
              {asset.files.map((file) => (
                <a
                  key={`${asset.title}-${file.label}`}
                  className={file.label === 'PDF' || file.label === 'DOCX' || file.label === 'XLSX' ? 'primary-button' : 'ghost-button'}
                  href={file.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {file.label}
                </a>
              ))}
            </div>
            {openPreview === asset.title ? (
              <div className="pdf-preview">
                <iframe
                  title={`Preview ${asset.title}`}
                  src={asset.files.find((file) => file.label === 'PDF')?.path}
                />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
