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
  legalEntityName: 'Concordia MedOps Tecnologia Ltda.',
  brandName: 'Prescripta',
  legalStructure: '[DEFINIR: MEI, LTDA, ou EIRELI - depende da decisao societaria]',
  headquarters: 'Guarulhos, SP, Brasil',
  companyStage: 'Beta controlado com conversao progressiva para receita recorrente',
  foundingDate: '[DEFINIR: ano ou marco]',
  founderNames: 'Andre Fiker, Robson [sobrenome]',
  commercialLead: 'Andre Fiker',
  legalLead: "[DEFINIR: nome do advogado ou 'A contratar']",
  dpoContact: 'privacidade@prescripta.com.br',
  supportContact: 'suporte@prescripta.com.br',
  website: 'prescripta.com.br',
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
