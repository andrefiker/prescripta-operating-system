export type CompanyProfile = {
  legalEntityName: string
  brandName: string
  legalStructure: string
  headquarters: string
  companyStage: string
  foundingDate: string
  founderNames: string
  commercialLead: string
  legalLead: string
  dpoContact: string
  supportContact: string
  website: string
  primaryIcp: string
  secondaryIcp: string
  commercialModel: string
  salesMotion: string
  pilotPolicy: string
  coreOffer: string
  startPlanPrice: string
  clinicPlanPrice: string
  setupPolicy: string
  roadmapNote: string
}

export const defaultCompanyProfile: CompanyProfile = {
  legalEntityName: 'Prescripta Tecnologia em Saude Ltda.',
  brandName: 'Prescripta',
  legalStructure: 'Sociedade limitada com operacao SaaS B2B em saude',
  headquarters: 'Sao Paulo, SP, Brasil',
  companyStage: 'Beta controlado com conversao progressiva para receita recorrente',
  foundingDate: '2026',
  founderNames: 'Fundadores Prescripta',
  commercialLead: 'Founder-led sales',
  legalLead: 'Juridico externo especializado em healthtech e LGPD',
  dpoContact: 'privacidade@prescripta.com.br',
  supportContact: 'suporte@prescripta.com.br',
  website: 'https://prescriptamed.com.br/',
  primaryIcp: 'Psiquiatra particular com alta recorrencia e fluxo manual entre consulta, retorno e renovacao',
  secondaryIcp: 'Clinicas de psiquiatria com recepcao, secretaria e mais de um prescritor',
  commercialModel: 'SaaS B2B com implantacao assistida, onboarding formal e recorrencia mensal',
  salesMotion: 'Venda consultiva com discovery, demo, proposta, alinhamento juridico-operacional e kickoff',
  pilotPolicy: 'Piloto pago de 60 dias com metas de ativacao, validacao operacional e decisao formal de conversao',
  coreOffer: 'Infraestrutura operacional para recorrencia prescricional em psiquiatria privada',
  startPlanPrice: 'R$ 349/mes',
  clinicPlanPrice: 'R$ 2.490/mes',
  setupPolicy: 'Setup remoto incluido para solo e implantacao paga para clinicas e enterprise',
  roadmapNote: 'Roadmap regulatorio separado para SNCR, receitas eletronicas de controlados e requisitos de assinatura qualificada.',
}
