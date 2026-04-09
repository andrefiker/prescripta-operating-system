import './App.css'

type Metric = {
  label: string
  value: string
  note: string
}

type Offer = {
  name: string
  audience: string
  price: string
  setup: string
  idealFor: string
  bullets: string[]
}

type SectionLink = {
  id: string
  label: string
}

type StructuredSection = {
  title: string
  intro: string
  bullets: string[]
}

const navLinks: SectionLink[] = [
  { id: 'tese', label: 'Tese' },
  { id: 'oferta', label: 'Oferta' },
  { id: 'vendas', label: 'Vendas' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'documentos', label: 'Documentos' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'roadmap', label: '90 dias' },
]

const heroMetrics: Metric[] = [
  {
    label: 'Posicionamento',
    value: 'B2B SaaS de rotina prescricional',
    note: 'Infraestrutura operacional para psiquiatria privada, nao prontuario generico.',
  },
  {
    label: 'Janela regulatoria',
    value: 'SNCR com marco em 1 de junho de 2026',
    note: 'A empresa precisa vender hoje com arquitetura compativel com o novo ciclo regulatorio.',
  },
  {
    label: 'Motor de venda',
    value: 'Founder-led sales',
    note: 'Primeiros 20 a 30 alvos devem ser trabalhados de forma consultiva e disciplinada.',
  },
]

const thesisBlocks: StructuredSection[] = [
  {
    title: 'Tese central',
    intro:
      'A Prescripta deve ser construida como a camada operacional de prescricoes recorrentes para psiquiatria privada no Brasil.',
    bullets: [
      'Vender previsibilidade operacional, continuidade terapeutica e governanca.',
      'Evitar o posicionamento amplo de "IA para saude", que dilui valor e aumenta risco regulatorio.',
      'Concentrar o discurso comercial em renovacao, acompanhamento, prazo, contexto e rastreabilidade.',
    ],
  },
  {
    title: 'O que a empresa e',
    intro:
      'Uma plataforma SaaS B2B que organiza o ciclo entre prescricao, termino previsto, alerta, retorno, renovacao e confirmacao.',
    bullets: [
      'Produto de workflow e compliance para operacoes sensiveis.',
      'Apoio operacional com supervisao humana e autoridade final do medico.',
      'Maquina de receita recorrente baseada em uso frequente e dor clara.',
    ],
  },
  {
    title: 'O que a empresa nao e',
    intro:
      'A Prescripta nao deve se apresentar como prontuario completo, clinica digital generica ou automacao clinica autonoma.',
    bullets: [
      'Nao substituir decisao medica.',
      'Nao prometer dispensa de revisao humana em receita por imagem.',
      'Nao prometer cobertura regulatoria total antes de validar cada fluxo de prescricao eletronica.',
    ],
  },
]

const icpSections: StructuredSection[] = [
  {
    title: 'ICP 1: psiquiatra particular com alta recorrencia',
    intro:
      'Melhor entrada para validar dor, mensagem e ticket com ciclo comercial curto.',
    bullets: [
      '1 prescritor, processo altamente manual, dependencia de WhatsApp e agenda.',
      'Alta sensibilidade a pacientes que "somem" entre consulta e renovacao.',
      'Valor: reduzir retrabalho, organizar prazo e diminuir perda de continuidade.',
    ],
  },
  {
    title: 'ICP 2: clinica pequena ou media de saude mental',
    intro:
      'Segmento com maior potencial de ticket e necessidade clara de implantacao assistida.',
    bullets: [
      'Recepcao, secretaria e multiplos prescritores dividindo o mesmo fluxo.',
      'Dor forte em coordenacao, rastreabilidade e padrao operacional.',
      'Valor: fila central, papeis claros, trilha de auditoria e cadencia configuravel.',
    ],
  },
  {
    title: 'ICP 3: operacao de telepsiquiatria e grupo maior',
    intro:
      'Conta enterprise para segunda fase, ja exigindo pacote juridico, seguranca e onboarding maduro.',
    bullets: [
      'Exige DPA, SLA, questionario de seguranca, processo de implantacao e governanca documental.',
      'Pode demandar SSO, permissoes avancadas, API e desenho regulatorio mais profundo.',
      'Valor: padronizacao de follow-up e compliance em escala.',
    ],
  },
]

const offers: Offer[] = [
  {
    name: 'Start Solo',
    audience: 'Psiquiatra particular em validacao de rotina',
    price: 'R$ 349/mes',
    setup: 'Setup padrao remoto incluido',
    idealFor: 'Entrada rapida com barreira baixa e foco em ativacao.',
    bullets: [
      '1 prescritor e ate 150 pacientes ativos acompanhados.',
      'Painel de termino previsto, alertas, calendario e trilha operacional.',
      'Suporte assincrono em horario comercial e base de conhecimento.',
    ],
  },
  {
    name: 'Pro Consultorio',
    audience: 'Consultorio com recorrencia relevante',
    price: 'R$ 990/mes',
    setup: 'R$ 1.500 de implantacao assistida',
    idealFor: 'Ticket principal de PMF comercial.',
    bullets: [
      'Ate 3 usuarios operacionais e 600 pacientes ativos.',
      'Fluxos de renovacao, pendencia, retorno e confirmacao com regras configuraveis.',
      'Treinamento inicial, revisao de processo e acompanhamento de ativacao por 30 dias.',
    ],
  },
  {
    name: 'Clinica',
    audience: 'Operacao com recepcao, secretaria e multiplos prescritores',
    price: 'R$ 2.490/mes',
    setup: 'R$ 4.500 de implantacao',
    idealFor: 'Conta de expansao com onboarding e CS formais.',
    bullets: [
      'Ate 10 usuarios, permissoes por perfil e fila central.',
      'Relatorios operacionais, trilha de auditoria reforcada e governance review.',
      'CS dedicado leve, playbook de adocao e revisao executiva mensal.',
    ],
  },
  {
    name: 'Enterprise / API',
    audience: 'Redes, grupos, parceiros e operacoes com procurement',
    price: 'Sob proposta',
    setup: 'A partir de R$ 15.000',
    idealFor: 'Venda consultiva com pacote juridico e tecnico completo.',
    bullets: [
      'Contrato customizado, DPA negociado, SLA e security review.',
      'Possivel SSO, integracoes, requisitos especificos e rollout por fases.',
      'Programa de implantacao, governanca e steering mensal.',
    ],
  },
]

const commercialArchitecture: StructuredSection[] = [
  {
    title: 'Oferta minima vendavel',
    intro:
      'A mensagem deve ser simples: a Prescripta tira a renovacao do improviso e transforma recorrencia em fluxo observavel.',
    bullets: [
      'Promessa principal: menos atraso, menos retrabalho, mais retencao e mais seguranca operacional.',
      'Oferta secundaria: implantacao guiada para estruturar a rotina da clinica.',
      'Prova necessaria: casos piloto, antes/depois operacional e metricas de resposta e ativacao.',
    ],
  },
  {
    title: 'Canais prioritarios',
    intro:
      'Os primeiros canais devem gerar conversa qualificada, nao volume superficial.',
    bullets: [
      'Founder-led outbound para 20 a 30 contas nomeadas.',
      'Conteudo de autoridade em LinkedIn e webinars sobre operacao prescricional e compliance.',
      'Parcerias com consultores de clinicas, juridico em saude, certificacao digital e ecossistema psiquiatrico.',
    ],
  },
  {
    title: 'Expansao de receita',
    intro:
      'A empresa precisa crescer por combinacao de expansao de contas e aumento de nivel operacional.',
    bullets: [
      'Upgrade por numero de pacientes ativos, usuarios e complexidade da operacao.',
      'Receita adicional com implantacao, treinamento, suporte premium e projetos enterprise.',
      'Land-and-expand: entrar pelo prescritor ou unidade e expandir para a clinica inteira.',
    ],
  },
]

const funnelStages = [
  'Lead identificado',
  'Qualificacao inicial',
  'Discovery',
  'Demo guiada',
  'Proposta e validacao juridica',
  'Fechamento',
  'Kickoff',
  'Go-live',
  'Ativacao e expansao',
]

const crmFields = [
  'Segmento, especialidade e porte',
  'Numero de prescritores, equipe operacional e pacientes ativos',
  'Dor dominante: atraso, retrabalho, perda de contexto, risco regulatorio ou retencao',
  'Estagio do deal, proximo passo, owner e data de follow-up',
  'ACV estimado, setup previsto e data-alvo de go-live',
  'Bloqueios de compliance, procurement ou integracao',
]

const salesAssets = [
  'One-pager com proposta de valor, ICP, beneficio economico, pilares de confianca e CTA.',
  'Deck comercial de 12 slides para discovery, demo e proposta.',
  'Script de demo de 20 minutos com inicio, prova, fluxo e fechamento.',
  'Calculadora de ROI focada em renovacoes recuperadas, horas poupadas e reducao de erro.',
  'Template de proposta com escopo, plano, setup, prazo, exclusoes e premissas.',
]

const onePagerSections = [
  'Headline: "A camada operacional da recorrencia prescricional para psiquiatria privada."',
  'Subheadline: explicar problema economico e operacional em uma frase.',
  '3 provas principais: termino previsto, alerta com contexto e trilha operacional.',
  '1 bloco de confianca: LGPD, supervisao humana, trilha de auditoria e direcao SNCR.',
  '1 CTA: agendar demo ou piloto pago com data.',
]

const proposalSections = [
  'Contexto do cliente e problema operacional identificado.',
  'Escopo contratado, o que esta incluido e o que esta fora.',
  'Plano escolhido, setup, condicoes comerciais e prazo de ativacao.',
  'Premissas de compliance, responsabilidades e dependencia do cliente.',
  'Proximo passo com cronograma de assinatura, kickoff e go-live.',
]

const deckOutline = [
  'Slide 1: categoria e tese da Prescripta.',
  'Slide 2: o problema operacional da recorrencia psiquiatrica.',
  'Slide 3: por que o custo do improviso e economico e clinico.',
  'Slide 4: como a Prescripta organiza termino, alerta, retorno e renovacao.',
  'Slide 5: visao do fluxo no painel.',
  'Slide 6: impacto operacional esperado.',
  'Slide 7: seguranca, LGPD, supervisao humana e trilha de auditoria.',
  'Slide 8: compatibilidade com assinatura eletronica e direcao regulatoria do SNCR.',
  'Slide 9: planos, implantacao e formato comercial.',
  'Slide 10: onboarding e prazo de ativacao.',
  'Slide 11: proximos passos e escopo do piloto.',
  'Slide 12: CTA para fechar piloto ou contratacao.',
]

const demoScript = [
  'Minuto 0-3: confirmar dor atual, volume, quem opera e onde o fluxo quebra.',
  'Minuto 3-6: mostrar o painel como fonte unica de verdade para recorrencia.',
  'Minuto 6-10: navegar pelo ciclo de prescricao, termino previsto, alerta e acao.',
  'Minuto 10-13: mostrar como recepcao e medico operam com contexto e trilha.',
  'Minuto 13-16: apresentar pontos de confianca, LGPD e supervisao humana.',
  'Minuto 16-20: discutir plano, implantacao, premissas e proximo passo com data.',
]

const legalSections: StructuredSection[] = [
  {
    title: 'Pacote juridico e de compliance minimo vendavel',
    intro:
      'Antes dos primeiros contratos pagos recorrentes, a empresa precisa ter o nucleo documental e processual fechado.',
    bullets: [
      'Termos de uso, politica de privacidade, DPA, politica de IA, politica de cookies e subprocessadores.',
      'ROPA, matriz de bases legais, politica de retencao, processo de atendimento a titulares e plano de incidente.',
      'Seguranca da informacao, controle de acesso, trilha de auditoria e governanca de fornecedores.',
    ],
  },
  {
    title: 'Papeis LGPD',
    intro:
      'A Prescripta precisa definir por atividade quando atua como controladora e quando atua como operadora em nome da clinica ou do medico.',
    bullets: [
      'Marketing, cobranca, conta e analytics proprios tendem a ficar sob papel de controladora.',
      'Dados clinicos e operacionais do paciente em regra devem ser tratados no contexto contratual do cliente.',
      'Esse desenho precisa estar coerente em contrato, privacidade, produto e suporte.',
    ],
  },
  {
    title: 'Regulacao de prescricao eletronica',
    intro:
      'Em 9 de abril de 2026, o roadmap da empresa precisa ser compativel com o SNCR e com a emissao eletronica de controlados.',
    bullets: [
      'Nao vender promessa de cobertura integral antes de mapear fluxo regulatorio por caso de uso.',
      'Estruturar trilha para assinatura compativel com ICP-Brasil quando exigido.',
      'Separar no comercial o que ja esta operacional do que esta em roadmap regulatorio.',
    ],
  },
]

const complianceMatrix = [
  {
    workstream: 'Contratos e privacidade',
    owner: 'Juridico + founder',
    urgency: 'Imediato',
  },
  {
    workstream: 'ROPA, bases legais e atendimento a titulares',
    owner: 'DPO / juridico',
    urgency: 'Imediato',
  },
  {
    workstream: 'Politica de IA, seguranca e incidentes',
    owner: 'Founder + operacoes + juridico',
    urgency: 'Imediato',
  },
  {
    workstream: 'Subprocessadores, retention e vendor review',
    owner: 'Operacoes',
    urgency: 'Primeiros 30 dias',
  },
  {
    workstream: 'Roadmap SNCR e controlados',
    owner: 'Founder + regulatorio',
    urgency: 'Paralelo ao comercial',
  },
]

const documentGroups = [
  {
    title: 'Base societaria e IP',
    items: [
      'Contrato social e acordo de socios.',
      'Vesting e cessao de propriedade intelectual.',
      'Registro de marca e politica de uso da marca.',
      'NDA e contratos de prestacao de servico.',
    ],
  },
  {
    title: 'Base contratual comercial',
    items: [
      'MSA / contrato SaaS.',
      'Ordem de servico / proposta comercial.',
      'DPA com anexos de seguranca.',
      'SLA, politica de suporte e politica de cancelamento.',
    ],
  },
  {
    title: 'Base de privacidade e seguranca',
    items: [
      'Politica de privacidade.',
      'Politica de cookies.',
      'Politica de IA e uso de automacao.',
      'Plano de resposta a incidentes e subprocessadores.',
    ],
  },
  {
    title: 'Base operacional interna',
    items: [
      'Playbook de onboarding.',
      'Playbook de suporte e CS.',
      'Security questionnaire padrao.',
      'Matriz de responsabilidades por incidente, contrato e go-live.',
    ],
  },
]

const onboardingSteps = [
  {
    title: '1. Kickoff comercial-operacional',
    body:
      'Confirmar ICP, plano contratado, responsaveis, premissas, metricas iniciais e data de go-live.',
  },
  {
    title: '2. Mapeamento do fluxo atual',
    body:
      'Entender como a clinica lida hoje com agendamento, retorno, renovacao, assinatura, envio, confirmacao e excecoes.',
  },
  {
    title: '3. Configuracao da cadencia clinica',
    body:
      'Definir regras, janelas de contato, papeis, status operacionais e criterios de escalonamento.',
  },
  {
    title: '4. Juridico operacional',
    body:
      'Fechar contrato, DPA, retencao, subprocessadores, canais de suporte e processo de incidente.',
  },
  {
    title: '5. Treinamento por papel',
    body:
      'Treinar medico, recepcao, secretaria e admin com checklist de uso real e criterios minimos de proficiencia.',
  },
  {
    title: '6. Go-live assistido + revisao de 30 dias',
    body:
      'Entrar em producao com monitoramento intenso, resolver atritos cedo e revisar adocao, risco e expansao.',
  },
]

const csMetrics = [
  'Time-to-value: primeira recorrencia acompanhada sem improviso.',
  'Ativacao: percentual de usuarios convidados que usam a rotina principal na primeira semana.',
  'Uso continuo: pacientes ativos com termino e alerta configurados.',
  'Saude operacional: tarefas concluidas no prazo, tickets, excecoes e retrabalho.',
  'Expansao: mais usuarios, mais unidades, mais pacientes ou upgrade de plano.',
]

const sprintAccounts = [
  '10 psiquiatras particulares com alta recorrencia e processo manual.',
  '10 clinicas pequenas com recepcao e secretaria.',
  '10 contas mais complexas para ouvir requisitos enterprise sem ainda vender para todos.',
]

const sprintCadence = [
  'Semana 1: listar 30 contas, definir tese, mensagem e dados minimos no CRM.',
  'Semana 2: abrir 30 conversas, marcar 8 a 10 discovery calls.',
  'Semana 3: rodar 6 a 8 demos, fechar 3 propostas e capturar objecoes reais.',
  'Semana 4: fechar 1 a 3 pilotos pagos ou contratos iniciais e alimentar prova social.',
]

const roadmap = [
  {
    phase: 'Dias 1-30',
    title: 'Empresa minima vendavel',
    bullets: [
      'Fechar tese, ICP, pricing, proposta e ativos comerciais.',
      'Finalizar pacote juridico/compliance minimo vendavel.',
      'Rodar sprint founder-led sales com 20 a 30 contas.',
    ],
  },
  {
    phase: 'Dias 31-60',
    title: 'Maquina de ativacao e prova',
    bullets: [
      'Executar onboarding disciplinado dos primeiros clientes.',
      'Medir ativacao, colher casos e validar objections de venda.',
      'Ajustar pricing, deck, demo e escopo a partir de deals reais.',
    ],
  },
  {
    phase: 'Dias 61-90',
    title: 'Expansao controlada',
    bullets: [
      'Formalizar CS, suporte, QBR e health score.',
      'Abrir canais de conteudo e parceria depois de validar o funil base.',
      'Preparar pacote enterprise e trilha regulatoria para SNCR/controlados.',
    ],
  },
]

function App() {
  return (
    <div className="shell">
      <header className="site-header">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">
            <span />
          </div>
          <div>
            <p className="eyebrow">Prescripta Operating System</p>
            <h1>Arquitetura comercial completa para transformar a Prescripta em SaaS funcional.</h1>
          </div>
        </div>
        <nav className="section-nav" aria-label="Navegacao de secoes">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="section-kicker">Blueprint executivo</p>
            <h2>
              Estrutura comercial, juridica e operacional da Prescripta
              <span> em 1 site de trabalho.</span>
            </h2>
            <p className="hero-text">
              Documento de referencia para socios, vendas, juridico, implantacao e compliance. Versao-base preparada
              em <strong>9 de abril de 2026</strong>, com recomendacao explicita de alinhar a trilha regulatoria ao
              SNCR e a prescricao eletronica de controlados.
            </p>
            <div className="hero-actions">
              <a href="#oferta" className="primary-link">
                Ver oferta e pricing
              </a>
              <a href="#compliance" className="secondary-link">
                Ver pacote juridico minimo
              </a>
            </div>
          </div>
          <div className="hero-rail" aria-label="Prioridades executivas">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="metric-row">
                <p className="metric-label">{metric.label}</p>
                <h3>{metric.value}</h3>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tese" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Tese, categoria e ICP</p>
            <h2>Fechar tese, ICP, oferta e pricing antes de ampliar canal.</h2>
            <p>
              A empresa precisa sair da logica "temos um produto" e entrar na logica "temos uma categoria estreita,
              uma maquina de venda e um pacote minimo vendavel".
            </p>
          </div>
          <div className="editorial-grid">
            {thesisBlocks.map((block) => (
              <article key={block.title} className="text-block">
                <h3>{block.title}</h3>
                <p>{block.intro}</p>
                <ul>
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="section-heading tight">
            <h3>ICP recomendado</h3>
            <p>
              A ordem importa. A Prescripta deve comecar por buyers com dor recorrente, ticket defensavel e baixo
              atrito de implantacao, e so depois entrar com mais forca em enterprise.
            </p>
          </div>
          <div className="editorial-grid">
            {icpSections.map((section) => (
              <article key={section.title} className="text-block">
                <h3>{section.title}</h3>
                <p>{section.intro}</p>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="oferta" className="content-section contrast-section">
          <div className="section-heading">
            <p className="section-kicker">Oferta, planos e pricing</p>
            <h2>Pricing orientado a valor operacional, nao so a assento.</h2>
            <p>
              A recomendacao e precificar pela criticidade do fluxo e pela complexidade operacional, com setup pago nos
              planos em que implantacao realmente gera valor.
            </p>
          </div>

          <div className="offer-grid">
            {offers.map((offer) => (
              <article key={offer.name} className="offer-column">
                <p className="offer-audience">{offer.audience}</p>
                <h3>{offer.name}</h3>
                <p className="offer-price">{offer.price}</p>
                <p className="offer-setup">{offer.setup}</p>
                <p className="offer-ideal">{offer.idealFor}</p>
                <ul>
                  {offer.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="editorial-grid">
            {commercialArchitecture.map((block) => (
              <article key={block.title} className="text-block">
                <h3>{block.title}</h3>
                <p>{block.intro}</p>
                <ul>
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="vendas" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">CRM, funil, proposta e founder-led sales</p>
            <h2>Rodar a maquina comercial antes de escalar marketing.</h2>
            <p>
              O objetivo dos proximos deals nao e "crescer rapido"; e descobrir a mensagem que fecha, o buyer que
              compra e o nivel minimo de compliance que sustenta contratos pagos.
            </p>
          </div>

          <div className="pipeline-strip">
            {funnelStages.map((stage) => (
              <div key={stage} className="pipeline-step">
                {stage}
              </div>
            ))}
          </div>

          <div className="two-column">
            <article className="text-block">
              <h3>Campos obrigatorios no CRM</h3>
              <ul>
                {crmFields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            </article>
            <article className="text-block">
              <h3>Ativos de venda que precisam existir</h3>
              <ul>
                {salesAssets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="three-column">
            <article className="text-block">
              <h3>Estrutura do deck comercial</h3>
              <ol>
                {deckOutline.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className="text-block">
              <h3>Script de demo</h3>
              <ol>
                {demoScript.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className="text-block">
              <h3>Sprint founder-led sales</h3>
              <p>Meta: abrir 20 a 30 contas, aprender com deals reais e fechar os primeiros pilotos pagos.</p>
              <ul>
                {sprintAccounts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ol>
                {sprintCadence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>

          <div className="two-column">
            <article className="text-block">
              <h3>Estrutura do one-pager</h3>
              <ol>
                {onePagerSections.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className="text-block">
              <h3>Estrutura da proposta comercial</h3>
              <ol>
                {proposalSections.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <section id="compliance" className="content-section contrast-section">
          <div className="section-heading">
            <p className="section-kicker">Mapa juridico e compliance</p>
            <h2>Fechar pacote juridico/compliance minimo vendavel antes de escalar receita.</h2>
            <p>
              Em saude, confianca nao e "apoio". E parte do produto, da venda e da retencao. A empresa precisa vender o
              que ja consegue sustentar juridicamente e operacionalmente.
            </p>
          </div>

          <div className="editorial-grid">
            {legalSections.map((block) => (
              <article key={block.title} className="text-block">
                <h3>{block.title}</h3>
                <p>{block.intro}</p>
                <ul>
                  {block.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="compliance-warning">
            <p className="section-kicker">Diretriz executiva</p>
            <h3>Separar claramente marketing, operacao atual e roadmap regulatorio.</h3>
            <p>
              Se o produto ainda nao cobre um caso regulatorio especifico, o comercial nao deve insinuar cobertura
              total. Em especial, tudo que tocar controlados, assinatura qualificada e integracao SNCR deve entrar com
              redacao precisa em site, contrato, deck e FAQ.
            </p>
          </div>

          <div className="matrix-table" role="table" aria-label="Matriz de compliance">
            <div className="matrix-row matrix-head" role="row">
              <span>Workstream</span>
              <span>Dono</span>
              <span>Urgencia</span>
            </div>
            {complianceMatrix.map((item) => (
              <div key={item.workstream} className="matrix-row" role="row">
                <span>{item.workstream}</span>
                <span>{item.owner}</span>
                <span>{item.urgency}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="documentos" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Lista de documentos</p>
            <h2>O pacote documental da empresa precisa existir em camadas.</h2>
            <p>
              A Prescripta nao precisa ter toda a burocracia de uma corporacao antes de vender, mas precisa ter o
              minimo certo para nao negociar no improviso.
            </p>
          </div>

          <div className="document-grid">
            {documentGroups.map((group) => (
              <article key={group.title} className="text-block">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="onboarding" className="content-section contrast-section">
          <div className="section-heading">
            <p className="section-kicker">Onboarding, implantacao e customer success</p>
            <h2>Formalizar onboarding e CS antes de abrir muitos canais.</h2>
            <p>
              O ganho da Prescripta aparece quando medico e equipe administrativa passam a trabalhar no mesmo fluxo. Por
              isso a implantacao precisa ser tratada como parte do produto e nao como pos-venda improvisado.
            </p>
          </div>

          <div className="timeline-list">
            {onboardingSteps.map((step) => (
              <article key={step.title} className="timeline-item">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="two-column">
            <article className="text-block">
              <h3>Entregaveis minimos do onboarding</h3>
              <ul>
                <li>Checklist de kickoff.</li>
                <li>Mapa do fluxo atual e do fluxo futuro.</li>
                <li>Configuracao de papeis, regras e canais.</li>
                <li>Treinamento por funcao.</li>
                <li>Checklist de go-live e revisao de 30 dias.</li>
              </ul>
            </article>
            <article className="text-block">
              <h3>Metricas de CS</h3>
              <ul>
                {csMetrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="roadmap" className="content-section roadmap-section">
          <div className="section-heading">
            <p className="section-kicker">Roadmap executivo</p>
            <h2>Ordem recomendada para os proximos 90 dias.</h2>
            <p>
              Primeiro fecha tese, comercial e compliance. Depois prova venda. Depois prova ativacao. So entao acelera
              marketing e canais.
            </p>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((phase) => (
              <article key={phase.phase} className="roadmap-block">
                <p className="roadmap-phase">{phase.phase}</p>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="final-band">
            <div>
              <p className="section-kicker">Resultado esperado</p>
              <h3>
                Sair do beta com uma empresa minimamente vendavel, juridicamente organizada e operacionalmente
                replicavel.
              </h3>
            </div>
            <p>
              Quando esse site estiver convertido em deck, proposta, contratos, CRM e onboarding real, a Prescripta
              deixa de ser so software e passa a operar como empresa SaaS de verdade.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
