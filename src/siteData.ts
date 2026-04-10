export type RouteKey =
  | 'home'
  | 'concorrentes'
  | 'comercial'
  | 'compliance'
  | 'trust'
  | 'documentos'
  | 'onboarding'
  | 'publico'
  | 'proximos'
  | 'stress'

export type NavItem = {
  key: RouteKey
  label: string
  kicker: string
}

export type PanelData = {
  title: string
  intro: string
  bullets: string[]
}

export type Offer = {
  name: string
  audience: string
  price: string
  setup: string
  summary: string
  bullets: string[]
}

export type TemplateBlock = {
  title: string
  body: string[]
}

export type ClauseBlock = {
  title: string
  text: string
}

export type DeliverableFile = {
  label: string
  path: string
}

export type DeliverableAsset = {
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3'
  title: string
  summary: string
  files: DeliverableFile[]
}

export type CompetitorCategory = {
  title: string
  intro: string
  features: string[]
  marketSignals?: string[]
}

export type BuildPathway = {
  gap: string
  why: string
  order: string
  horizon: string
  dependencies: string[]
  effort: string
  blockers: string[]
  steps: string[]
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Overview', kicker: 'Tese e fase' },
  { key: 'concorrentes', label: 'Concorrentes', kicker: 'Gaps e pathways' },
  { key: 'comercial', label: 'Comercial', kicker: 'ICP, pricing e vendas' },
  { key: 'compliance', label: 'Compliance', kicker: 'Juridico, trust e risco' },
  { key: 'trust', label: 'Trust Center', kicker: 'Pagina publica de confianca' },
  { key: 'documentos', label: 'Documentos', kicker: 'Templates quase finais' },
  { key: 'onboarding', label: 'Onboarding', kicker: 'Implantacao e CS' },
  { key: 'publico', label: 'Site Publico', kicker: 'Versao apresentavel e GTM' },
  { key: 'proximos', label: 'Proximos Passos', kicker: 'Execucao e contas-alvo' },
  { key: 'stress', label: 'Stress Test', kicker: 'Produto, adoção e pricing' },
]

export const stats = [
  {
    label: 'Categoria',
    value: 'Infraestrutura operacional para recorrencia prescricional em psiquiatria privada',
    note: 'A Prescripta deve vender processo, previsibilidade e governanca.',
  },
  {
    label: 'Estagio',
    value: 'Beta controlado com conversao progressiva para receita recorrente',
    note: 'Beta serve para aprendizado e prova, nao para adiar pricing indefinidamente.',
  },
  {
    label: 'Janela critica',
    value: 'SNCR e controlados em 2026',
    note: 'Site, contrato e deck precisam diferenciar o que ja existe do que ainda esta em roadmap.',
  },
]

export const thesisPanels: PanelData[] = [
  {
    title: 'Tese central',
    intro:
      'A Prescripta deve ser tratada como a camada operacional de prescricoes recorrentes para psiquiatria privada no Brasil.',
    bullets: [
      'Nao competir como prontuario generico.',
      'Nao se apresentar como IA clinica autonoma.',
      'Vender rotina organizada, menor retrabalho, mais retencao e mais seguranca operacional.',
    ],
  },
  {
    title: 'O que a empresa e',
    intro:
      'Uma plataforma SaaS B2B para transformar termino previsto, alerta, retorno, renovacao e confirmacao em um fluxo observavel.',
    bullets: [
      'Workflow operacional com revisao humana.',
      'Autoridade final preservada para o medico.',
      'Modelo de receita recorrente sustentado por uso frequente e dor repetitiva.',
    ],
  },
  {
    title: 'O que a empresa nao e',
    intro:
      'A clareza do que fica fora da promessa comercial reduz ruido, risco juridico e objecao de venda.',
    bullets: [
      'Nao substitui decisao medica.',
      'Nao promete cobertura regulatoria total sem validacao de cada fluxo.',
      'Nao deve usar marketing amplo de "IA para saude".',
    ],
  },
]

export const phasePanels: PanelData[] = [
  {
    title: 'Politica de beta',
    intro:
      'O beta precisa ter prazo, objetivo e criterio de saida. Sem isso ele vira uma forma de adiar a construcao da empresa.',
    bullets: [
      'Beta aberto curto e limitado.',
      'Design partners com termo, janela de 60 a 90 dias e metas de validacao.',
      'Encerramento formal ou conversao para plano pago ao final do periodo.',
    ],
  },
  {
    title: 'Transicao para receita',
    intro:
      'A transicao deve acontecer cedo, mesmo com produto ainda amadurecendo, desde que a promessa comercial seja precisa.',
    bullets: [
      'Psiquiatra solo pode entrar com founder pricing controlado.',
      'Clinicas devem entrar como venda assistida e onboarding pago desde cedo.',
      'Nenhuma conta enterprise deve ser tratada como beta informal.',
    ],
  },
  {
    title: 'Regra de narrativa',
    intro:
      'A linguagem publica precisa refletir exatamente o estagio do produto e da empresa.',
    bullets: [
      'O que esta operacional deve estar claro.',
      'O que esta em roadmap regulatorio deve aparecer como roadmap.',
      'A palavra "gratis" precisa ser usada com criterio, para nao treinar o mercado errado.',
    ],
  },
]

export const icpPanels: PanelData[] = [
  {
    title: 'ICP 1: psiquiatra particular com alta recorrencia',
    intro:
      'Entrada ideal para validar mensagem, ativacao e ticket com ciclo curto.',
    bullets: [
      '1 prescritor, processo manual, dependencia de agenda e WhatsApp.',
      'Alta dor em paciente que some entre consulta e renovacao.',
      'Busca praticidade, previsibilidade e menos carga cognitiva.',
    ],
  },
  {
    title: 'ICP 2: clinica pequena ou media',
    intro:
      'Melhor segmento para consolidar implantacao, setup fee e expansao de conta.',
    bullets: [
      'Recepcao, secretaria e mais de um prescritor.',
      'Necessidade forte de fila central, status e responsabilidade por etapa.',
      'Valorizacao de treinamento, seguranca e trilha de auditoria.',
    ],
  },
  {
    title: 'ICP 3: telepsiquiatria e grupos',
    intro:
      'Segmento mais valioso, mas so deve ser atacado com pacote juridico e operacional maduro.',
    bullets: [
      'DPA, SLA, security review e governanca sao gatekeepers.',
      'Pode exigir SSO, integracao e rollout por fases.',
      'Nao e fase 1 de GTM.',
    ],
  },
]

export const offers: Offer[] = [
  {
    name: 'Start Solo',
    audience: 'Psiquiatra particular em validacao de rotina',
    price: 'R$ 349/mes',
    setup: 'Setup remoto incluido',
    summary: 'Entrada comercial simples com barreira baixa e foco em ativacao.',
    bullets: [
      '1 prescritor e ate 150 pacientes ativos.',
      'Painel de termino previsto, alertas e trilha operacional.',
      'Suporte assincrono em horario comercial.',
    ],
  },
  {
    name: 'Pro Consultorio',
    audience: 'Consultorio com recorrencia relevante',
    price: 'R$ 990/mes',
    setup: 'R$ 1.500 de implantacao',
    summary: 'Principal plano de PMF comercial.',
    bullets: [
      'Ate 3 usuarios e 600 pacientes ativos.',
      'Fluxos de renovacao, pendencia, retorno e confirmacao.',
      'Treinamento inicial e acompanhamento de ativacao por 30 dias.',
    ],
  },
  {
    name: 'Clinica',
    audience: 'Operacao com recepcao, secretaria e multiplos prescritores',
    price: 'R$ 2.490/mes',
    setup: 'R$ 4.500 de implantacao',
    summary: 'Conta de expansao com onboarding e CS formais.',
    bullets: [
      'Ate 10 usuarios com permissoes por perfil.',
      'Fila central e relatorios operacionais.',
      'Revisao executiva mensal e trilha de auditoria reforcada.',
    ],
  },
  {
    name: 'Enterprise / API',
    audience: 'Redes, grupos e parceiros',
    price: 'Sob proposta',
    setup: 'A partir de R$ 15.000',
    summary: 'Venda consultiva com pacote juridico e tecnico completo.',
    bullets: [
      'DPA negociado, SLA e security review.',
      'Possivel SSO, integracoes e rollout por fases.',
      'Steering recorrente e implantacao customizada.',
    ],
  },
]

export const channels = [
  'Founder-led outbound para 20 a 30 contas nomeadas.',
  'Conteudo de autoridade em LinkedIn com tese de categoria.',
  'Webinars sobre operacao prescricional, continuidade terapeutica e compliance.',
  'Parcerias com consultores de clinica, juridico em saude e ecossistema psiquiatrico.',
]

export const crmFields = [
  'Segmento, porte, especialidade e cidade.',
  'Numero de prescritores, equipe operacional e pacientes ativos.',
  'Dor dominante: atraso, retrabalho, risco regulatorio, perda de contexto ou retencao.',
  'Estagio, proximo passo, owner, data de follow-up e risco do deal.',
  'ACV estimado, setup, prazo de ativacao e chance de fechamento.',
]

export const objectionCards = [
  {
    title: '"Ja uso WhatsApp e agenda."',
    body:
      'O problema nao e o canal isolado, e sim a falta de uma fonte unica de verdade para termino, retorno, renovacao e confirmacao.',
  },
  {
    title: '"Isso e um prontuario?"',
    body:
      'Nao. A Prescripta entra de forma estreita na camada operacional da recorrencia e evita a complexidade de um prontuario amplo.',
  },
  {
    title: '"A IA toma decisao?"',
    body:
      'Nao. Automacao acelera contexto e preparacao, mas a revisao e a autoridade final ficam com o medico.',
  },
  {
    title: '"E LGPD?"',
    body:
      'A resposta precisa vir com trust center, DPA, papeis claros, processo de incidente, logs e politica de seguranca.',
  },
]

export const compliancePanels: PanelData[] = [
  {
    title: 'Pacote minimo vendavel',
    intro:
      'Antes de escalar contratos, a Prescripta precisa ter nucleo documental e processual fechado.',
    bullets: [
      'Termos de uso, politica de privacidade, DPA, politica de IA e subprocessadores.',
      'ROPA, matriz de bases legais, retencao e atendimento a titulares.',
      'Processo de incidente, seguranca da informacao e governanca de fornecedores.',
    ],
  },
  {
    title: 'Papeis LGPD',
    intro:
      'A empresa precisa definir por atividade quando atua como controladora e quando atua como operadora em nome do cliente.',
    bullets: [
      'Marketing, conta e cobranca tendem a ficar como controladora.',
      'Dados clinicos e operacionais tendem a ficar em contexto contratual do cliente.',
      'Esse desenho precisa bater em contrato, site, deck e operacao.',
    ],
  },
  {
    title: 'Regulacao e prescricao eletronica',
    intro:
      'A venda deve distinguir o que a Prescripta ja cobre daquilo que depende de amadurecimento regulatorio e integracao futura.',
    bullets: [
      'Separar claramente claims atuais de roadmap SNCR.',
      'Ter trilha compativel com ICP-Brasil quando exigido.',
      'Nao tratar controlados como extensao trivial do fluxo atual.',
    ],
  },
]

export const trustChecklist = [
  'Termos de uso publicados e coerentes com a oferta real.',
  'Politica de privacidade atualizada.',
  'DPA pronto para envio comercial.',
  'Lista de subprocessadores publicada.',
  'Politica de IA explicando revisao humana e limites.',
  'Pagina de seguranca com canais de suporte e incidente.',
]

export const trustCenterSections: PanelData[] = [
  {
    title: 'Visao geral de seguranca',
    intro: 'Seguranca precisa aparecer como operacao concreta, nao como promessa abstrata de software.',
    bullets: [
      'Criptografia em transito e em repouso para dados clinicos e operacionais.',
      'Controle de acesso por perfil, logs e trilha de auditoria.',
      'Backups periodicos, monitoramento e plano documentado de incidente.',
    ],
  },
  {
    title: 'Privacidade e LGPD',
    intro: 'A pagina publica precisa explicar papel, contato e retencao sem juridiquês vazio.',
    bullets: [
      'Cliente como controlador e Prescripta como operadora no contexto do fluxo contratado.',
      'Solicitacoes via privacidade@prescripta.com.br e base contratual alinhada ao DPA.',
      'Retencao operacional durante o contrato + 30 dias para exportacao.',
    ],
  },
  {
    title: 'IA com supervisao humana',
    intro: 'A camada de IA precisa reduzir medo e deixar limites claros logo de saida.',
    bullets: [
      'A IA prepara contexto, mas nao diagnostica, nao prescreve e nao decide sozinha.',
      'Toda saida relevante exige revisao humana antes de produzir efeito.',
      'Dados de clientes nao devem ser usados para treino fora da politica publicada.',
    ],
  },
]

export const trustCenterSubprocessors = [
  ['Infraestrutura e hospedagem', 'Armazenamento, processamento, backup e observabilidade da plataforma', 'Nomeacao final em vendor review | regiao final a publicar'],
  ['Provedor de IA', 'Processamento de linguagem e apoio operacional com supervisao humana', 'Nomeacao final em vendor review | regiao final a publicar'],
  ['Gateway de pagamento', 'Cobranca, conciliacao e trilha financeira', 'Nomeacao final em vendor review | regiao final a publicar'],
  ['Provedor de e-mail e notificacoes', 'Envio de alertas operacionais, comunicacoes transacionais e suporte', 'Nomeacao final em vendor review | regiao final a publicar'],
]

export const trustCenterRetention = [
  ['Dados cadastrais do usuario', 'Duracao do contrato + 5 anos', 'Obrigacoes fiscais e defesa juridica'],
  ['Dados operacionais de pacientes', 'Duracao do contrato + 30 dias', 'Portabilidade e exportacao'],
  ['Logs de acesso', '6 meses', 'Marco Civil da Internet'],
  ['Dados de pagamento', '5 anos', 'Legislacao fiscal'],
]

export const complianceMatrix = [
  ['Contratos e privacidade', 'Juridico + founder', 'Imediato'],
  ['ROPA, bases legais e atendimento a titulares', 'DPO / juridico', 'Imediato'],
  ['Politica de IA, seguranca e incidentes', 'Founder + operacoes + juridico', 'Imediato'],
  ['Subprocessadores, retention e vendor review', 'Operacoes', 'Primeiros 30 dias'],
  ['Roadmap SNCR e controlados', 'Founder + regulatorio', 'Paralelo ao comercial'],
]

export const documentTemplates: TemplateBlock[] = [
  {
    title: 'Template de one-pager',
    body: [
      'Headline: A camada operacional da recorrencia prescricional para psiquiatria privada.',
      'Subheadline: Menos improviso entre consulta e receita, com contexto, alerta e trilha operacional.',
      'Linha de time: Fundada por psicologo clinico e psiquiatra, com equipe de desenvolvimento especializada em healthtech.',
      'Bloco de prova: termino previsto, renovacao observavel, equipe alinhada e menos retrabalho.',
      'Bloco de confianca: LGPD, supervisao humana, trilha de auditoria e direcao regulatoria.',
      'CTA: agendar demo ou piloto pago.',
    ],
  },
  {
    title: 'Template de proposta comercial',
    body: [
      '1. Contexto do cliente e problema operacional observado.',
      '2. Escopo contratado, inclusoes e exclusoes.',
      '3. Plano, setup, prazo e responsaveis.',
      '4. Premissas juridicas e operacionais.',
      '5. Cronograma de assinatura, kickoff e go-live.',
    ],
  },
  {
    title: 'Template de discovery call',
    body: [
      'Volume de recorrencia e perfil de pacientes.',
      'Quem opera renovacao hoje e em quais ferramentas.',
      'Onde o fluxo quebra: prazo, contexto, comunicacao ou revisao.',
      'Como o comprador mede valor.',
      'Resposta pronta para "quem faz isso?": origem clinica + time especializado em healthtech.',
      'Que riscos travam a adocao.',
    ],
  },
  {
    title: 'Template de trust center',
    body: [
      'Visao geral de seguranca e arquitetura.',
      'Privacidade e papeis LGPD.',
      'Politica de IA e supervisao humana.',
      'Subprocessadores e retencao.',
      'Canal de incidente, suporte e DPA.',
    ],
  },
]

export const clauseBlocks: ClauseBlock[] = [
  {
    title: 'Texto-base de proposta',
    text:
      'A Prescripta sera contratada como plataforma SaaS para estruturar a rotina operacional de prescricoes recorrentes, incluindo configuracao inicial, treinamento e suporte conforme o plano escolhido. O servico nao substitui decisao clinica nem promete cobertura regulatoria fora do escopo expressamente contratado.',
  },
  {
    title: 'Texto-base de piloto pago',
    text:
      'Este piloto tera prazo inicial de 60 dias, com objetivo de validar ativacao operacional, aderencia da equipe, valor percebido e requisitos de implantacao. Ao final do periodo, as partes revisarao resultados e decidirao pela conversao para contrato recorrente ou encerramento formal do piloto.',
  },
  {
    title: 'Texto-base de DPA comercial',
    text:
      'A Prescripta atuara como operadora dos dados pessoais tratados em nome do cliente no contexto do fluxo operacional contratado, observadas as instrucoes documentadas do controlador, as medidas tecnicas e organizacionais aplicaveis e os subprocessadores listados no trust center vigente.',
  },
  {
    title: 'Texto-base de follow-up apos demo',
    text:
      'Conforme alinhado na demonstracao, a principal dor atual esta em prazo, contexto e renovacao manual. Em anexo segue proposta com escopo, premissas, setup e cronograma sugerido de kickoff. Se fizer sentido, o proximo passo recomendado e uma reuniao curta para validar juridico operacional e confirmar data de implantacao.',
  },
]

export const documentInventory = [
  {
    group: 'Base societaria e IP',
    items: [
      'Contrato social e acordo de socios.',
      'Vesting e cessao de propriedade intelectual.',
      'Registro de marca.',
      'NDA e contratos de prestacao.',
    ],
  },
  {
    group: 'Base contratual comercial',
    items: [
      'MSA / contrato SaaS.',
      'Ordem de servico / proposta.',
      'DPA com anexos de seguranca.',
      'SLA, cancelamento e suporte.',
    ],
  },
  {
    group: 'Base de privacidade e seguranca',
    items: [
      'Politica de privacidade.',
      'Politica de cookies.',
      'Politica de IA.',
      'Plano de resposta a incidentes.',
    ],
  },
  {
    group: 'Base operacional',
    items: [
      'Playbook de onboarding.',
      'Playbook de suporte e CS.',
      'Questionario de seguranca padrao.',
      'Matriz de responsabilidades por go-live e incidente.',
    ],
  },
]

export const onboardingTimeline = [
  ['Kickoff comercial-operacional', 'Confirmar ICP, escopo, responsaveis, metricas iniciais e data-alvo de go-live.'],
  ['Mapeamento de fluxo atual', 'Entender como agendamento, retorno, renovacao, assinatura e envio acontecem hoje.'],
  ['Configuracao da cadencia', 'Definir papeis, status, regras de contato, excecoes e escalonamento.'],
  ['Juridico operacional', 'Fechar contrato, DPA, retencao, subprocessadores e canais de incidente.'],
  ['Treinamento por papel', 'Treinar medico, recepcao, secretaria e admin com checklist de uso real.'],
  ['Go-live assistido', 'Entrar em producao com suporte intenso e revisao de 30 dias.'],
]

export const onboardingChecklists = [
  {
    title: 'Checklist de kickoff',
    items: [
      'Conta, plano, setup e owner definidos.',
      'Objetivo de negocio e metricas de sucesso alinhados.',
      'Responsavel do cliente por operacao e por aprovacao definidos.',
    ],
  },
  {
    title: 'Checklist de treinamento',
    items: [
      'Fluxo principal executado por cada papel.',
      'Excecoes compreendidas.',
      'Canal de suporte conhecido por todos.',
    ],
  },
  {
    title: 'Checklist de go-live',
    items: [
      'Usuarios criticos ativos.',
      'Fluxo principal configurado.',
      'Politicas de suporte e incidente compartilhadas.',
    ],
  },
]

export const csMetrics = [
  'Time-to-value: primeira recorrencia acompanhada sem improviso.',
  'Ativacao: usuarios convidados que usam a rotina principal na primeira semana.',
  'Uso continuo: pacientes ativos com termino e alerta configurados.',
  'Saude operacional: tarefas no prazo, tickets, excecoes e retrabalho.',
  'Expansao: mais usuarios, mais unidades, mais pacientes ou upgrade.',
]

export const executiveMetrics = [
  'MRR novo e setup fechado por mes.',
  'Discovery calls, demos, propostas e fechamentos.',
  'Tempo medio entre lead qualificado e assinatura.',
  'Ativacao em 30 dias e churn logo.',
  'Conversao de design partner para pago.',
  'Contas com risco juridico/compliance pendente.',
]

export const publicBlueprint: PanelData[] = [
  {
    title: 'Pilha minima do site publico',
    intro: 'A versao publica deve vender e reduzir objecao, nao despejar todo o manual interno.',
    bullets: [
      'Homepage com categoria clara, problema, fluxo, confianca e CTA.',
      'Pagina de pricing com planos, setup e diferenca entre beta e operacao comercial.',
      'Trust center publico com privacidade, DPA, IA, subprocessadores e seguranca.',
    ],
  },
  {
    title: 'Paginas segmentadas',
    intro: 'O discurso para psiquiatra solo e para clinica precisa mudar em dor, valor e formato de compra.',
    bullets: [
      'Pagina para psiquiatra solo focada em rotina, prazo e menos friccao.',
      'Pagina para clinica focada em fila, equipe, rastreabilidade e governanca.',
      'Pagina enterprise enxuta, com convite para discovery e due diligence.',
    ],
  },
  {
    title: 'Quem somos e origem do produto',
    intro: 'A homepage precisa mostrar que a Prescripta tem origem clinica e composicao de equipe mais forte do que um projeto individual.',
    bullets: [
      'Linha minima de equipe: fundada por psicologo clinico e psiquiatra, com equipe de desenvolvimento especializada em healthtech.',
      'Inserir Andrezza como co-criadora do produto na camada de confianca, nao como cliente.',
      'Explicar que o fluxo nasceu da operacao real de psiquiatria privada e nao de uma tese genérica de software medico.',
    ],
  },
  {
    title: 'Sequencia recomendada',
    intro: 'So ampliar SEO e canais depois que o site refletir uma empresa minimamente vendavel.',
    bullets: [
      'Atualizar homepage e pricing.',
      'Publicar trust center minimo.',
      'Publicar paginas segmentadas.',
      'So depois ampliar conteudo, distribuicao e parceria.',
    ],
  },
]

export const roadmap = [
  {
    phase: 'Dias 1-30',
    title: 'Empresa minima vendavel',
    bullets: [
      'Fechar tese, ICP, pricing, proposta e ativos comerciais.',
      'Fechar pacote juridico/compliance minimo vendavel.',
      'Rodar founder-led sales com 20 a 30 contas.',
    ],
  },
  {
    phase: 'Dias 31-60',
    title: 'Conversao e ativacao',
    bullets: [
      'Transformar design partners em aprendizado estruturado.',
      'Executar onboarding disciplinado dos primeiros clientes pagos.',
      'Ajustar pricing, proposta e narrativa com base em deals reais.',
    ],
  },
  {
    phase: 'Dias 61-90',
    title: 'Expansao controlada',
    bullets: [
      'Formalizar CS, scorecard e trust center publico.',
      'Abrir conteudo e parceria depois de validar o funil base.',
      'Preparar a camada enterprise e a trilha regulatoria de controlados.',
    ],
  },
]

export const deliverableAssets: DeliverableAsset[] = [
  {
    tier: 'Tier 1',
    title: 'Termos de Uso',
    summary: 'Termos completos para SaaS de saude, com limites de escopo, licenca, dados de saude e clausulas de uso.',
    files: [
      { label: 'PDF', path: './documents/termos-de-uso.pdf' },
      { label: 'Markdown', path: './documents/termos-de-uso.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'Politica de Privacidade',
    summary: 'Politica LGPD com bases legais, papel de controlador e operador, retencao, direitos e contato.',
    files: [
      { label: 'PDF', path: './documents/politica-de-privacidade.pdf' },
      { label: 'Markdown', path: './documents/politica-de-privacidade.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'DPA',
    summary: 'Anexo contratual de protecao de dados para acompanhar proposta e contrato.',
    files: [
      { label: 'PDF', path: './documents/dpa.pdf' },
      { label: 'Markdown', path: './documents/dpa.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'Politica de IA',
    summary: 'Documento com supervisao humana, limites de automacao e proibicao de decisao clinica autonoma.',
    files: [
      { label: 'PDF', path: './documents/politica-de-ia.pdf' },
      { label: 'Markdown', path: './documents/politica-de-ia.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'Proposta comercial completa',
    summary: 'Minuta com campos preenchiveis, escopo, pricing, cronograma e aceite.',
    files: [
      { label: 'PDF', path: './documents/proposta-comercial.pdf' },
      { label: 'DOCX', path: './documents/proposta-comercial.docx' },
      { label: 'Markdown', path: './documents/proposta-comercial.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'One-pager',
    summary: 'Resumo executivo final para envio apos demo, com dor, tese, limites e CTA.',
    files: [
      { label: 'PDF', path: './documents/one-pager.pdf' },
      { label: 'Markdown', path: './documents/one-pager.md' },
    ],
  },
  {
    tier: 'Tier 1',
    title: 'Contrato SaaS (MSA)',
    summary: 'Contrato-base com objeto, vigencia, pagamento, dados, confidencialidade e rescisao.',
    files: [
      { label: 'PDF', path: './documents/contrato-saas-msa.pdf' },
      { label: 'Markdown', path: './documents/contrato-saas-msa.md' },
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Playbook de onboarding',
    summary: 'Operacao de handoff, kickoff, treinamento por papel, go-live e revisao de ativacao.',
    files: [
      { label: 'PDF', path: './documents/playbook-onboarding.pdf' },
      { label: 'Markdown', path: './documents/playbook-onboarding.md' },
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Discovery call script',
    summary: 'Fluxo real de discovery, logica de aprofundamento e criterios de qualificacao.',
    files: [
      { label: 'PDF', path: './documents/discovery-call-script.pdf' },
      { label: 'Markdown', path: './documents/discovery-call-script.md' },
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Welcome email sequence',
    summary: 'Sequencia do fechamento ate ativacao, pronta para automacao ou envio manual.',
    files: [
      { label: 'PDF', path: './documents/welcome-email-sequence.pdf' },
      { label: 'Markdown', path: './documents/welcome-email-sequence.md' },
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Trust center page content',
    summary: 'Copy pronta para privacidade, seguranca, IA, subprocessadores e incidentes.',
    files: [
      { label: 'PDF', path: './documents/trust-center-content.pdf' },
      { label: 'Markdown', path: './documents/trust-center-content.md' },
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Guia rapido | Medico',
    summary: 'Guia de 1 pagina para rotina clinica, revisao e decisao dentro da Prescripta.',
    files: [{ label: 'Markdown', path: './documents/guia-rapido-medico.md' }],
  },
  {
    tier: 'Tier 2',
    title: 'Guia rapido | Recepcao',
    summary: 'Guia de 1 pagina para agenda, contato, pendencia e handoff operacional.',
    files: [{ label: 'Markdown', path: './documents/guia-rapido-recepcao.md' }],
  },
  {
    tier: 'Tier 2',
    title: 'Guia rapido | Admin',
    summary: 'Guia de 1 pagina para owner da conta, governanca, setup e monitoramento.',
    files: [{ label: 'Markdown', path: './documents/guia-rapido-admin.md' }],
  },
  {
    tier: 'Tier 3',
    title: 'CRM setup spec',
    summary: 'Ferramenta sugerida, campos obrigatorios, estagios, automacoes e relatorios.',
    files: [
      { label: 'PDF', path: './documents/crm-setup-spec.pdf' },
      { label: 'Markdown', path: './documents/crm-setup-spec.md' },
    ],
  },
  {
    tier: 'Tier 3',
    title: 'Revenue projection spreadsheet',
    summary: 'Planilha de MRR com mix de planos, churn e contribuicao mensal.',
    files: [{ label: 'XLSX', path: './documents/revenue-projection.xlsx' }],
  },
  {
    tier: 'Tier 3',
    title: 'Objection handling playbook',
    summary: 'Scripts completos para objecoes comerciais recorrentes.',
    files: [
      { label: 'PDF', path: './documents/objection-handling-playbook.pdf' },
      { label: 'Markdown', path: './documents/objection-handling-playbook.md' },
    ],
  },
  {
    tier: 'Tier 3',
    title: 'Homepage copy',
    summary: 'Texto da landing page, com headlines, secoes, CTA e estrutura de prova.',
    files: [
      { label: 'PDF', path: './documents/homepage-copy.pdf' },
      { label: 'Markdown', path: './documents/homepage-copy.md' },
    ],
  },
]

export const competitorCategories: CompetitorCategory[] = [
  {
    title: 'Agenda e agendamento',
    intro: 'Essa camada e commodity de mercado. Sem ela, o sistema parece incompleto para consultorio e clinica.',
    features: [
      'Agenda medica com status em tempo real: aguardando, em atendimento e nao compareceu.',
      'Agendamento online 24h com link publico para o paciente marcar sozinho.',
      'Lista de espera automatica.',
      'Agendamento recorrente.',
      'Sincronizacao com Google Calendar e Apple Calendar.',
      'Bloqueio de horarios, ferias e indisponibilidade.',
      'Multiplos profissionais e unidades na mesma agenda.',
    ],
  },
  {
    title: 'Comunicacao com paciente',
    intro: 'Aqui mora uma grande parte da promessa de reducao de no-show e reativacao de base.',
    features: [
      'Lembrete de consulta por WhatsApp automatico.',
      'Confirmacao de consulta por WhatsApp com resposta alterando status na agenda.',
      'Lembrete por SMS.',
      'Lembrete por e-mail.',
      'E-mail de aniversariantes.',
      'Sequencias de retorno e reativacao.',
      'Campanhas de e-mail marketing.',
      'Pesquisa de satisfacao pos-consulta.',
      'Chat interno entre recepcao e medico.',
      'Portal do paciente com acesso a receitas, prontuario e documentos.',
    ],
  },
  {
    title: 'Prescricao',
    intro: 'Esse bloco decide percepcao de maturidade clinica e aderencia regulatoria do produto.',
    features: [
      'Integracao Memed com banco de medicamentos, interacoes e envio por QR Code.',
      'Assinatura digital ICP-Brasil com validade juridica.',
      'Envio de receita por WhatsApp ou e-mail direto ao paciente.',
      'Modelos salvos de prescricao.',
      'Prescricao de controle especial e notificacao de receita.',
      'Solicitacao de exames digitalmente.',
    ],
  },
  {
    title: 'Prontuario',
    intro: 'Aqui a disputa sai do operacional puro e entra em profundidade clinica e conveniencia de uso.',
    features: [
      'Prontuario personalizavel por especialidade com campos livres e formularios customizados.',
      'Historico longitudinal com linha do tempo do paciente.',
      'Calculadoras clinicas integradas.',
      'Escalas psiquiatricas validadas no prontuario: PHQ-9, GAD-7, PANSS e Y-BOCS.',
      'Anexo de arquivos, exames e fotos.',
      'Compartilhamento de prontuario com outros profissionais.',
      'Transcricao de consulta por IA.',
      'Copilot de IA durante consulta.',
    ],
    marketSignals: [
      'Feegow ja empurra IA com o Feegow IA.',
      'Amplimed ja empurra transcricao e copilot com a camada Amelia.',
      'TribeMD tem vantagem potencial em escalas psiquiatricas especializadas.',
    ],
  },
  {
    title: 'Teleconsulta',
    intro: 'Teleconsulta ja e expectativa basica, nao diferencial premium.',
    features: [
      'Videochamada integrada ao prontuario sem sair do sistema.',
      'Compartilhamento de tela durante consulta.',
      'Gravacao da teleconsulta.',
      'Termo de consentimento para teleconsulta.',
      'Agendamento online de teleconsulta pelo paciente.',
    ],
  },
  {
    title: 'Financeiro',
    intro: 'Para clinicas e operacoes mistas, essa camada entra cedo no processo de compra.',
    features: [
      'Controle de recebimentos e despesas.',
      'Fluxo de caixa.',
      'Repasse financeiro para multiplos profissionais.',
      'Controle de estoque.',
      'Faturamento TISS com TUSS, guias e glosas.',
      'Parcelamento de procedimentos.',
      'Orcamentos para pacientes.',
      'Emissao de recibo e NF-e integrada.',
      'Relatorios financeiros detalhados.',
    ],
  },
  {
    title: 'Infraestrutura e compliance',
    intro: 'Essa camada reduz objecao juridica e de TI, especialmente em contas maiores.',
    features: [
      'Certificacao SBIS / CFM.',
      'Infraestrutura em nuvem com criptografia SSL.',
      'Politica de privacidade e LGPD documentada e publica.',
      'App mobile nativo para iOS e Android.',
      'API publica para integracoes externas.',
      'Suporte tecnico com SLA por chat, telefone e e-mail.',
      'Central de ajuda e base de conhecimento.',
      'Migracao de dados assistida de outro sistema.',
      'Trial gratuito.',
    ],
    marketSignals: [
      'Feegow usa a certificacao SBIS NGS2 como sinal de maturidade.',
      'Privacidade publica, suporte formal e trial gratuito sao heuristicas de compra ja esperadas.',
    ],
  },
  {
    title: 'Conteudo e ecossistema',
    intro: 'Os players maduros constroem canal e distribuicao junto com o produto.',
    features: [
      'Blog e conteudo educativo.',
      'Materiais para download como guias e e-books.',
      'Cursos ou formacao integrada.',
      'Integracao com plataforma publica de agendamento para descoberta de pacientes.',
    ],
    marketSignals: [
      'iClinic herda musculatura de conteudo via Afya.',
      'TribeMD acopla educacao via BIPP.',
      'iClinic ainda ganha distribuicao com o AgendarConsulta.',
    ],
  },
]

export const competitorCriticalGaps: BuildPathway[] = [
  {
    gap: 'Assinatura digital ICP-Brasil',
    why: 'Bloqueador regulatorio direto para receituario valido e para qualquer ambicao com controlados.',
    order: 'Depois de trust center publico e base documental minima; antes de qualquer narrativa forte de controlados.',
    horizon: '90 a 150 dias',
    dependencies: [
      'Politica de IA, DPA e trilha de auditoria minimamente fechadas.',
      'Definicao do fluxo de prescricao que sera assinado.',
      'Parceiro tecnico ou provedor de assinatura qualificada escolhido.',
    ],
    effort: 'Alto',
    blockers: [
      'Complexidade juridico-regulatoria.',
      'Dependencia de parceiro externo e certificacao.',
      'Necessidade de prova forte de integridade, log e guarda do artefato.',
    ],
    steps: [
      'Definir se a Prescripta vai integrar um provedor existente de assinatura qualificada ou operar apenas como orquestradora do fluxo.',
      'Modelar casos de uso: receita comum, receita de controle especial, termo e laudo.',
      'Implementar assinatura com trilha de auditoria, carimbo de tempo e armazenamento do artefato assinado.',
      'Criar validacao juridica com advogado e plano de rollout restrito antes de abrir publicamente.',
    ],
  },
  {
    gap: 'Integracao Memed',
    why: 'Expectativa clara de mercado; sem isso a camada de prescricao parece incompleta para o comprador.',
    order: 'Entre os primeiros blocos clinicos a construir, logo depois do trust publico e do fluxo-base de prescricao.',
    horizon: '30 a 60 dias',
    dependencies: [
      'Fluxo de prescricao e entrega ao paciente claramente modelado.',
      'Acesso comercial e tecnico a API da Memed.',
      'UI simples para medico e equipe sem virar prontuario completo.',
    ],
    effort: 'Medio',
    blockers: [
      'Negociacao de parceria e acesso a API.',
      'Risco de alargar o produto para prontuario generico.',
      'Necessidade de manter experiencia mais rapida do que o processo atual do medico.',
    ],
    steps: [
      'Abrir parceria tecnica e comercial com a Memed e confirmar requisitos de acesso a API.',
      'Mapear exatamente onde a Memed entra no fluxo Prescripta sem virar prontuario completo.',
      'Implementar prescricao assistida com selecao de medicamento, dosagem e entrega ao paciente.',
      'Testar com psiquiatras de alta recorrencia para garantir que o fluxo fica mais rapido do que o improviso atual.',
    ],
  },
  {
    gap: 'Teleconsulta integrada',
    why: 'Ja virou commodity e reduz objecao de compra para consultorios e operacoes hibridas.',
    order: 'Depois de agenda minima e antes de atacar operacoes maiores que esperam atendimento hibrido.',
    horizon: '45 a 90 dias',
    dependencies: [
      'Agenda e eventos de consulta minimamente estruturados.',
      'Provedor de video white-label ou API de video escolhida.',
      'Politica de consentimento e registro de teleconsulta definida.',
    ],
    effort: 'Medio',
    blockers: [
      'Dependencia de infraestrutura de video confiavel.',
      'Complexidade de UX quando acoplada a agenda e ao contexto do paciente.',
      'Possivel expansao de escopo para gravacao, chat e compartilhamento de tela.',
    ],
    steps: [
      'Comecar por integracao com provedor de video white-label em vez de construir stack propria.',
      'Acoplar a sala de teleconsulta ao contexto do paciente e ao evento de agenda.',
      'Adicionar consentimento, registro de inicio/fim e links seguros por consulta.',
      'Deixar gravacao e recursos avancados para fase 2, depois de validar aderencia real.',
    ],
  },
  {
    gap: 'Lembrete e confirmacao por WhatsApp',
    why: 'E o argumento comercial mais facil de entender para reducao de no-show e ganho operacional.',
    order: 'Muito cedo, junto da agenda minima; e uma das alavancas mais visiveis de compra.',
    horizon: '30 a 60 dias',
    dependencies: [
      'Modelo de agenda, status e eventos minimamente definido.',
      'Provedor oficial de WhatsApp Business API.',
      'Politica de opt-in e templates aprovados.',
    ],
    effort: 'Medio',
    blockers: [
      'Aprovacao de templates e regras do ecossistema WhatsApp.',
      'Custo operacional por mensagem.',
      'Complexidade de reconciliar resposta do paciente com status reais da agenda.',
    ],
    steps: [
      'Fechar provedor oficial da API do WhatsApp Business e definir custo por mensagem.',
      'Modelar templates para lembrete, confirmacao, retorno e follow-up de ausencia.',
      'Conectar resposta do paciente a mudancas objetivas de status na agenda e no fluxo operacional.',
      'Construir opt-in, trilha de auditoria e controle de janelas de envio para nao virar spam operacional.',
    ],
  },
  {
    gap: 'Agendamento online publico',
    why: 'Permite aquisicao e conveniencia 24h sem depender da recepcao para tudo.',
    order: 'Depois de agenda minima, bloqueios e regras de disponibilidade; antes de escalar acquisition.',
    horizon: '45 a 75 dias',
    dependencies: [
      'Agenda com slots, bloqueios e buffers.',
      'Modelo de profissional, tipo de consulta e disponibilidade.',
      'Fluxo de confirmacao e remarcacao basico.',
    ],
    effort: 'Medio',
    blockers: [
      'Risco de edge cases de agenda e colisao de slots.',
      'Necessidade de UX muito clara para paciente final.',
      'Dependencia de boa integracao com notificacoes e confirmacao.',
    ],
    steps: [
      'Subir pagina publica por profissional com slots disponiveis e regras simples de elegibilidade.',
      'Conectar slots a agenda principal com bloqueios, buffers e tipos de consulta.',
      'Adicionar confirmacao automatica e remarcacao basica.',
      'Liberar primeiro para solo e consultorio pequeno antes de tentar casos com multiplas unidades.',
    ],
  },
  {
    gap: 'Controle financeiro basico',
    why: 'Fluxo de caixa, recibo e repasse entram cedo na conversa com clinicas.',
    order: 'Depois de provar agenda, comunicacao e ativacao; nao deve entrar antes do wedge principal estabilizar.',
    horizon: '60 a 120 dias',
    dependencies: [
      'Modelo claro do que e faturamento por consulta versus caixa interno.',
      'Escopo inicial restrito: recebimentos, despesas e recibo.',
      'Decisao sobre integracao fiscal futura versus operacao manual no inicio.',
    ],
    effort: 'Medio para alto',
    blockers: [
      'Expansao de escopo para ERP clinico.',
      'Complexidade fiscal brasileira se entrar cedo demais em NF-e.',
      'Baixo foco se o ICP inicial ainda compra mais por recorrencia do que por financeiro.',
    ],
    steps: [
      'Comecar com recebimentos, despesas, caixa e emissao simples de recibo.',
      'Separar claramente o que e financeiro interno da clinica do que e faturamento medico por atendimento.',
      'Adicionar repasse por profissional e conciliacao simples apenas depois da camada base estabilizar.',
      'Integrar NF-e e cobranca somente quando houver uso real suficiente para justificar complexidade fiscal.',
    ],
  },
  {
    gap: 'Faturamento TISS',
    why: 'Necessario para capturar clinicas e operacoes com convenio; sem isso parte do mercado fica fora.',
    order: 'Bem depois do PMF inicial; tratar como trilha separada, nao como extensao do core logo cedo.',
    horizon: '120 a 180 dias',
    dependencies: [
      'Decisao estrategica de entrar em convenios como mercado-alvo real.',
      'Conhecimento operacional de guias, glosas, TUSS e operadoras.',
      'Time com capacidade de tocar integracoes e compliance especificos.',
    ],
    effort: 'Muito alto',
    blockers: [
      'Complexidade operacional e regulatoria alta.',
      'Risco de desviar a empresa do wedge principal.',
      'Implementacao dificil de testar sem parceiro de piloto muito engajado.',
    ],
    steps: [
      'Validar se esse bloco e essencial para o ICP de curto prazo ou se deve ficar fora da fase 1.',
      'Mapear operadoras, guias, eventos e glosas mais frequentes em psiquiatria privada.',
      'Construir modulo separado do core de recorrencia, para nao contaminar o wedge principal.',
      'Entrar com piloto restrito em uma operacao com convenio antes de produto generalista.',
    ],
  },
  {
    gap: 'Escalas psiquiatricas no prontuario',
    why: 'Pode virar diferencial real de especialidade, especialmente onde os generalistas ainda sao fracos.',
    order: 'Cedo, depois da base clinica minima; e o melhor gap para virar diferenciação de especialidade.',
    horizon: '30 a 75 dias',
    dependencies: [
      'Modelo de prontuario ou contexto clinico minimo onde a escala vai viver.',
      'Selecao das escalas prioritarias por uso real no ICP.',
      'Visualizacao longitudinal por paciente.',
    ],
    effort: 'Medio',
    blockers: [
      'Risco de crescer prontuario demais sem resolver UX.',
      'Necessidade de modelagem clinica boa para nao virar formulario morto.',
      'Priorizacao correta das escalas certas para o ICP, e nao um pacote enciclopedico.',
    ],
    steps: [
      'Priorizar um pacote inicial: PHQ-9, GAD-7, Y-BOCS e PANSS ou equivalentes mais frequentes no ICP.',
      'Modelar aplicacao, historico longitudinal e visualizacao de evolucao por paciente.',
      'Permitir preenchimento pelo paciente e revisao pelo medico quando fizer sentido.',
      'Conectar resultado da escala ao contexto da consulta, sem transformar a Prescripta em prontuario generico.',
    ],
  },
  {
    gap: 'Trial gratuito ou piloto com entrada muito baixa',
    why: 'Ausencia de trial adiciona friccao de aquisicao quando a categoria ainda precisa ser explicada.',
    order: 'Imediato, junto do ajuste de narrativa publica e pricing de entrada.',
    horizon: '15 a 30 dias',
    dependencies: [
      'Definicao do que e beta, trial e piloto pago.',
      'Instrumentacao minima de ativacao e conversao.',
      'Pagina publica explicando a regra comercial sem ambiguidade.',
    ],
    effort: 'Baixo para medio',
    blockers: [
      'Risco de treinar o mercado para gratuidade permanente.',
      'Confusao entre beta aberto e piloto estruturado.',
      'Falta de metricao de ativacao se o trial abrir cedo demais.',
    ],
    steps: [
      'Decidir se o modelo sera trial aberto curto, trial guiado ou piloto pago descontavel na conversao.',
      'Limitar escopo do trial para preservar valor e evitar treinar o mercado para gratuidade permanente.',
      'Instrumentar ativacao, tempo ate valor e motivos de abandono desde o primeiro dia.',
      'Publicar regra clara no site para nao misturar beta com gratis indefinido.',
    ],
  },
  {
    gap: 'Politica LGPD publica e trust center minimo',
    why: 'Sem isso o comprador serio trava antes de assinatura ou diligencia simples.',
    order: 'Primeiro de todos os gaps estruturais; deve existir antes de escalar outbound, pricing e narrativa publica.',
    horizon: '7 a 21 dias',
    dependencies: [
      'Termos de Uso, Politica de Privacidade, DPA e Politica de IA minimamente consistentes.',
      'Lista de subprocessadores e contatos de privacidade, suporte e incidente.',
      'Coerencia entre site, proposta e contrato.',
    ],
    effort: 'Baixo para medio',
    blockers: [
      'Dependencia de revisao juridica final.',
      'Necessidade de manter os documentos vivos e sincronizados.',
      'Risco reputacional se publicar algo que o contrato nao sustenta.',
    ],
    steps: [
      'Publicar Politica de Privacidade, DPA, Politica de IA e lista de subprocessadores em rota publica clara.',
      'Adicionar pagina de seguranca com contatos de suporte, privacidade e incidente.',
      'Garantir consistencia total entre site, proposta, contrato e materiais comerciais.',
      'Manter changelog simples de atualizacao documental para passar mais confianca em deals reais.',
    ],
  },
]

export const nextStepPriorities: PanelData[] = [
  {
    title: 'Fechar os primeiros 5 clientes pagos',
    intro: 'O software pronto muda o gargalo. O foco agora e provar venda, ativacao e retencao.',
    bullets: [
      'Nao operar em beta aberto ou design partner indefinido.',
      'Usar founder pricing apenas como excecao governada.',
      'Validar com deals reais quem compra, quanto paga e como ativa.',
    ],
  },
  {
    title: 'Rodar founder-led sales por 6 a 8 semanas',
    intro: 'A prioridade e conversa qualificada, nao canal de escala.',
    bullets: [
      'Lista nomeada de 30 a 50 contas.',
      'Cadencia curta com discovery, demo, proposta e follow-up.',
      'Aprender com deals perdidos e friccao comercial antes de ampliar marketing.',
    ],
  },
  {
    title: 'Medir ativacao antes de investir em crescimento',
    intro: 'Sem go-live e uso recorrente, marketing so amplia barulho.',
    bullets: [
      'Time-to-value na primeira recorrencia organizada.',
      'Ativacao em 7 e 30 dias.',
      'Uso recorrente, churn logo e motivo de nao ativacao.',
    ],
  },
]

export const targetAccounts = [
  ['A', 'Clinica NOZ', 'Sao Paulo', 'Clinica privada com narrativa forte de continuidade de cuidado.', 'https://www.clinicanoz.com/'],
  ['A', 'L&T Mental Health Care', 'Sao Paulo', 'Operacao com psiquiatria, psicologia e neuromodulacao; boa chance de dor operacional real.', 'https://www.clinicalt.com.br/'],
  ['A', 'Clinica OHR Psiquiatria', 'Sao Paulo', 'Psiquiatria particular com potencial de rotina recorrente e compra enxuta.', 'https://www.ohrpsiquiatria.com.br/'],
  ['A', 'Clinica Gaude', 'Sao Paulo', 'Estrutura particular com psiquiatria e jornada de acompanhamento.', 'https://clinicagaude.com.br/psiquiatria/'],
  ['A', 'Mental Med Saude', 'Sao Paulo', 'Psiquiatria dentro de estrutura medica mais ampla, com potencial de ownership operacional.', 'https://www.mentalmedsaude.com.br/'],
  ['A', 'Clinica Maxwell / Psiquiatria em SP', 'Atibaia', 'Discurso forte de acompanhamento continuo e monitoramento.', 'https://psiquiatriaemsp.com.br/'],
  ['B', 'IMCELER TelePsiquiatria', 'Brasil', 'Conta de perfil institucional para segunda onda, nao fase 1.', 'https://imceler.com.br/telepsiquiatria/'],
]

export const outreachSequence = [
  ['Dia 1', 'Email inicial', 'Abrir conversa sobre processo, nao sobre produto.'],
  ['Dia 3', 'Follow-up curto', 'Reposicionar a dor como falta de governanca de rotina.'],
  ['Dia 5', 'WhatsApp ou ligacao', 'Pedir 15 minutos, sem pitch longo.'],
  ['Dia 8', 'Envio de one-pager', 'Mandar material apenas se houver interesse minimo.'],
  ['Dia 12', 'Ultimo follow-up', 'Encerrar com clareza: agora, depois ou fora de timing.'],
]

export const outreachCopy = [
  {
    title: 'Email inicial',
    text:
      'Oi, [Nome]. Estou falando com clinicas e psiquiatras que ainda operam parte da recorrencia entre consulta, prazo, retorno e renovacao em agenda, WhatsApp e fluxo manual. A Prescripta foi desenhada para organizar exatamente essa camada operacional, sem virar prontuario e sem mexer na autoridade clinica. Se fizer sentido, posso te mostrar em 15 minutos como estamos estruturando isso para operacoes de psiquiatria privada.',
  },
  {
    title: 'Follow-up de tese',
    text:
      'O ponto central aqui nao e trocar canal. E dar visibilidade e ownership a uma rotina que costuma ficar espalhada entre recepcao, medico e paciente. Se isso hoje ja gera retrabalho ou perda de contexto, vale a conversa.',
  },
  {
    title: 'Encerramento da cadencia',
    text:
      'Quero te deixar com uma pergunta objetiva: faz sentido conversar sobre organizacao de recorrencia prescricional agora ou melhor retomarmos em outro momento? Se nao estiver na hora, eu tiro da cadencia sem problema.',
  },
]

export const fourWeekMetrics = [
  '30 contas listadas e priorizadas.',
  '20 contas efetivamente contatadas.',
  '10 respostas ou interacoes relevantes.',
  '8 discovery calls realizadas.',
  '5 demos feitas.',
  '3 propostas enviadas.',
  '1 a 3 fechamentos pagos.',
]

export const minimumViableLoop = [
  [
    '1. Consulta terminada',
    'Usuario emite a prescriçao e envia foto ou digita medicacao, dose/frequencia e data de emissao.',
  ],
  [
    '2. Duracao calculada',
    'Prescripta estima a data de termino e pede apenas uma confirmacao ou ajuste.',
  ],
  [
    '3. Alerta agendado',
    'O sistema programa um alerta de expiracao, por exemplo 14 dias antes.',
  ],
  [
    '4. Momento de acao',
    'Quando o alerta chega, o usuario abre o caso e marca renovar, contatar, ignorar ou resolver.',
  ],
]

export const compulsionMoment = {
  trigger:
    'Paciente manda mensagem dizendo que a medicacao termina amanha e pede renovacao imediata no meio de uma semana cheia.',
  failure:
    'Sem Prescripta, o medico precisa reconstruir o contexto em WhatsApp, agenda, PDFs antigos e memoria. Gasta tempo, perde certeza e responde sob pressao.',
  resolution:
    'Com Prescripta, a prescriçao ja esta em uma linha do tempo com data de emissao, termino estimado e status do ciclo. O medico abre uma tela e decide com contexto.',
  emotion: 'Sai de interrupcao ansiosa para alivio, velocidade e confianca.',
}

export const migrationPressure: PanelData[] = [
  {
    title: 'O que quebra hoje',
    intro: 'Memoria e chat nao sao uma camada temporal de prescricoes.',
    bullets: [
      'Paciente avisa tarde ou com informacao imprecisa.',
      'Duracao fica escondida em calculo mental e improviso.',
      'Nao existe visao futura do que esta para vencer.',
    ],
  },
  {
    title: 'O que força mudanca',
    intro: 'A dor nao e organizacao abstrata. E reconstruir contexto toda vez que a urgencia ja chegou.',
    bullets: [
      'Interrupcoes repetidas em horario ruim.',
      'Retrabalho para entender se a renovacao faz sentido.',
      'Baixa previsibilidade sobre carga operacional futura.',
    ],
  },
  {
    title: 'Por que Prescripta vence',
    intro: 'Ela muda o timing do trabalho.',
    bullets: [
      'WhatsApp informa depois que virou problema.',
      'Prescripta informa antes que vire problema.',
      'O medico para de reconstruir e passa a revisar.',
    ],
  },
]

export const failureModes = [
  [
    'Falha comportamental',
    'Usuarios continuam em memoria e WhatsApp porque percebem Prescripta como trabalho duplicado.',
    'Fazer a primeira captura caber em uma unica prescriçao e permitir entrada por assistente.',
  ],
  [
    'Falha de confianca',
    'Erro de extraçao ou duracao invalida destrói a credibilidade do sistema.',
    'Nunca esconder incerteza; sempre pedir confirmacao do termino estimado.',
  ],
  [
    'Falha de engajamento',
    'Alertas viram ruido e sao ignorados.',
    'Manter alertas escassos, contextuais e com uma unica acao clara.',
  ],
  [
    'Fragilidade do sistema',
    'Dados incompletos, regimenes ambiguos e uso parcial fazem o produto quebrar.',
    'Aceitar registros parciais e degradar para fila de confirmacao em vez de bloquear.',
  ],
]

export const messyRealityPanels: PanelData[] = [
  {
    title: 'Input imperfeito',
    intro: 'Foto ruim ou dose ambigua nao podem matar o valor.',
    bullets: [
      'Se OCR falhar, pedir so os campos criticos.',
      'Se duracao for incerta, pedir confirmacao direta da data de termino.',
      'Se nada der certo, salvar como caso pendente de validacao.',
    ],
  },
  {
    title: 'Uso inconsistente',
    intro: 'O produto ainda precisa servir mesmo quando a adesao e parcial.',
    bullets: [
      'Entregar valor no subconjunto rastreado.',
      'Funcionar como lookup reativo em momentos de renovacao.',
      'Nao exigir completude para gerar beneficio.',
    ],
  },
  {
    title: 'Regra de degradacao',
    intro: 'So existe elegancia real quando o sistema continua util em 60% de completude.',
    bullets: [
      'Fila de casos com duracao indefinida.',
      'Alertas apenas para itens confirmados.',
      'Estado claro entre confiavel, pendente e incompleto.',
    ],
  },
]

export const positioningRewrite = {
  sentence: 'Prescripta te diz quando a prescriçao de cada paciente vai acabar, antes de isso virar problema.',
  paragraph:
    'Psiquiatras nao perdem tempo porque prescricoes existem. Perdem tempo porque cada prescriçao tem um relogio escondido, e esse relogio hoje e gerido em memoria, chat e interrupcao. Prescripta calcula quando a prescriçao provavelmente termina, mostra isso como uma data concreta e avisa antes da renovacao virar urgencia.',
  scenario:
    'O paciente escreve dizendo que a medicacao acaba amanha. Em vez de vasculhar WhatsApp, PDF antigo e memoria, o medico abre Prescripta e ve quando a prescriçao foi emitida, quando deveria terminar e se a renovacao ja estava prevista.',
}

export const pricingStressPanels: PanelData[] = [
  {
    title: 'O que precisa ser verdade',
    intro: 'Preco mensal so se sustenta se o produto virar rotina critica.',
    bullets: [
      'Ser checado antes de responder renovacoes.',
      'Salvar repetidamente tempo mental, nao apenas ocasionalmente.',
      'Operar ciclos suficientes por mes para parecer indispensavel.',
    ],
  },
  {
    title: 'O que quebra',
    intro: 'Se o uso for esporadico, o preco vira friccao.',
    bullets: [
      'Lifetime barato treina o mercado errado.',
      'Produto nice-to-have nao sustenta ticket de assinatura.',
      'Uso eventual aumenta churn depois da novidade inicial.',
    ],
  },
  {
    title: 'Logica mais robusta',
    intro: 'Cobrar por intent real e por implantacao onde houver mudanca operacional.',
    bullets: [
      'Plano solo mensal sem lifetime.',
      'Clinica com recorrencia mais setup.',
      'Piloto pago e descontavel na conversao.',
    ],
  },
]

export const finalVerdict = {
  verdict: 'B | Produto viavel',
  rationale:
    'A ideia ja passou de prototipo inteligente porque tem dor real, wedge comportamental e caminho de retencao. Ainda nao e infraestrutura porque a rotina e a confianca ainda podem ser descartadas sem quebrar a operacao do usuario.',
  leverage:
    'O maior ganho vem de dominar um unico momento: quando a renovacao esta perto e o medico nao quer reconstruir manualmente a linha do tempo da prescriçao.',
}
