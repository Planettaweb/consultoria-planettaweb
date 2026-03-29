export type PortfolioCategory = 'site' | 'system' | 'bi'

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  image: string
  mockupData: {
    primaryColor?: string
    heroImage?: string
    features?: string[]
    stats?: { label: string; value: string }[]
    chartType?: 'bar' | 'line' | 'pie'
  }
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'distribuidora-oticas',
    title: 'Distribuidoras de Óticas',
    category: 'site',
    description: 'Plataforma B2B para distribuição de armações e lentes.',
    image: 'https://img.usecurling.com/p/600/400?q=glasses%20store&color=blue',
    mockupData: {
      primaryColor: 'blue',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=glasses%20modern&color=blue',
      features: [
        'Catálogo Online B2B',
        'Integração ERP',
        'Área do Revendedor',
        'Rastreio de Pedidos',
      ],
    },
  },
  {
    id: 'consultoria-financeira',
    title: 'Consultoria Financeira',
    category: 'site',
    description: 'Site institucional focado em captação de leads para serviços financeiros.',
    image: 'https://img.usecurling.com/p/600/400?q=finance%20meeting&color=green',
    mockupData: {
      primaryColor: 'green',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=office%20chart&color=green',
      features: [
        'Agendamento Online',
        'Calculadoras Financeiras',
        'Blog de Investimentos',
        'Portal do Cliente',
      ],
    },
  },
  {
    id: 'maquinas-metal-mecanica',
    title: 'Vendas de Máquinas e Equipamentos de Metal Mecânica',
    category: 'site',
    description: 'Catálogo digital e orçamentação online para indústria pesada.',
    image: 'https://img.usecurling.com/p/600/400?q=heavy%20machinery&color=orange',
    mockupData: {
      primaryColor: 'orange',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=factory%20machine&color=orange',
      features: [
        'Solicitação de Orçamentos',
        'Fichas Técnicas PDF',
        'Comparador de Máquinas',
        'Peças de Reposição',
      ],
    },
  },
  {
    id: 'associacao-energia-saude',
    title: 'Associação de Profissionais de Energia, Saúde e Bem Estar',
    category: 'site',
    description: 'Portal de membros, notícias e eventos para associados.',
    image: 'https://img.usecurling.com/p/600/400?q=wellness%20energy&color=cyan',
    mockupData: {
      primaryColor: 'cyan',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=health%20professionals&color=cyan',
      features: [
        'Área do Associado',
        'Calendário de Eventos',
        'Publicações Científicas',
        'Fórum de Discussão',
      ],
    },
  },
  {
    id: 'radio-ondas-curtas',
    title: 'Empresa de Rádio Ondas Curtas',
    category: 'site',
    description: 'Streaming de áudio ao vivo, programação e podcasts.',
    image: 'https://img.usecurling.com/p/600/400?q=radio%20station&color=purple',
    mockupData: {
      primaryColor: 'purple',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=microphone%20studio&color=purple',
      features: [
        'Player Ao Vivo',
        'Grade de Programação',
        'Galeria de Podcasts',
        'Pedidos de Música',
      ],
    },
  },
  {
    id: 'servicos-rh',
    title: 'Serviços de RH',
    category: 'site',
    description: 'Portal de vagas, banco de currículos e serviços corporativos.',
    image: 'https://img.usecurling.com/p/600/400?q=human%20resources&color=red',
    mockupData: {
      primaryColor: 'red',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=job%20interview&color=red',
      features: [
        'Mural de Vagas',
        'Envio de Currículo',
        'Área da Empresa',
        'Testes Comportamentais',
      ],
    },
  },
  {
    id: 'treinamento-desenvolvimento',
    title: 'Treinamento e Desenvolvimento de Pessoas',
    category: 'site',
    description: 'Plataforma de cursos EAD, inscrições e certificados.',
    image: 'https://img.usecurling.com/p/600/400?q=corporate%20training&color=blue',
    mockupData: {
      primaryColor: 'blue',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=workshop%20training&color=blue',
      features: ['Cursos Online', 'Emissão de Certificados', 'Avaliações', 'Painel do Aluno'],
    },
  },
  {
    id: 'avaliadora-imobiliaria',
    title: 'Avaliadora Imobiliária',
    category: 'site',
    description: 'Solicitação de laudos, acompanhamento de processos e portfólio.',
    image: 'https://img.usecurling.com/p/600/400?q=real%20estate%20building&color=gray',
    mockupData: {
      primaryColor: 'gray',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=city%20buildings&color=gray',
      features: [
        'Agendamento de Vistorias',
        'Download de Laudos',
        'Calculadora de Valores',
        'Área do Corretor',
      ],
    },
  },
  {
    id: 'transportadora-logistica',
    title: 'Transportadora de Logística',
    category: 'site',
    description: 'Rastreamento de cargas, cotação online e área do cliente.',
    image: 'https://img.usecurling.com/p/600/400?q=logistics%20truck&color=yellow',
    mockupData: {
      primaryColor: 'yellow',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=warehouse%20shipping&color=yellow',
      features: [
        'Rastreio de Encomendas',
        'Cotação de Frete',
        'Portal do Caminhoneiro',
        'Faturas e Boletos',
      ],
    },
  },
  {
    id: 'aeronaves-executivas',
    title: 'Empresa de Aeronaves Executivas',
    category: 'site',
    description: 'Fretamento de voos, compra/venda de aeronaves e serviços.',
    image: 'https://img.usecurling.com/p/600/400?q=private%20jet&color=black',
    mockupData: {
      primaryColor: 'black',
      heroImage: 'https://img.usecurling.com/p/1200/600?q=luxury%20airplane&color=black',
      features: [
        'Cotação de Voo',
        'Catálogo de Aeronaves',
        'Serviços de Hangaragem',
        'Gestão de Tripulação',
      ],
    },
  },
  {
    id: 'fluxo-de-caixa',
    title: 'Fluxo de Caixa',
    category: 'system',
    description: 'Sistema web para gestão de entradas e saídas financeiras.',
    image: 'https://img.usecurling.com/p/600/400?q=cash%20flow%20app&color=green',
    mockupData: {
      stats: [
        { label: 'Receitas', value: 'R$ 145.000,00' },
        { label: 'Despesas', value: 'R$ 82.500,00' },
        { label: 'Saldo', value: 'R$ 62.500,00' },
      ],
      chartType: 'bar',
    },
  },
  {
    id: 'base-financeira',
    title: 'Criação de Base Financeira (DRE e Plano de Contas)',
    category: 'system',
    description: 'Estruturação contábil e geração de demonstrativos de resultados.',
    image: 'https://img.usecurling.com/p/600/400?q=accounting%20software&color=blue',
    mockupData: {
      stats: [
        { label: 'Receita Bruta', value: 'R$ 500.000,00' },
        { label: 'Impostos', value: 'R$ 75.000,00' },
        { label: 'Lucro Líquido', value: 'R$ 120.000,00' },
      ],
      chartType: 'bar',
    },
  },
  {
    id: 'sistema-votacao',
    title: 'Sistema de Votação para Associações',
    category: 'system',
    description: 'Plataforma segura e auditável para eleições e assembleias virtuais.',
    image: 'https://img.usecurling.com/p/600/400?q=voting%20online&color=cyan',
    mockupData: {
      stats: [
        { label: 'Eleitores Aptos', value: '1.250' },
        { label: 'Votos Registrados', value: '984' },
        { label: 'Abstenções', value: '266' },
      ],
      chartType: 'pie',
    },
  },
  {
    id: 'gestao-associacoes',
    title: 'Sistema de Gestão para Associações de Funcionários',
    category: 'system',
    description: 'Controle de associados, mensalidades, convênios e benefícios.',
    image: 'https://img.usecurling.com/p/600/400?q=members%20dashboard&color=orange',
    mockupData: {
      stats: [
        { label: 'Sócios Ativos', value: '8.430' },
        { label: 'Inadimplentes', value: '120' },
        { label: 'Novas Filiações', value: '45' },
      ],
      chartType: 'line',
    },
  },
  {
    id: 'bi-equipamentos-musicais',
    title: 'Painel de Indicadores para Empresa de Vendas de Equipamentos Musicais',
    category: 'bi',
    description: 'Dashboard BI de vendas, estoque e performance por categoria de instrumentos.',
    image: 'https://img.usecurling.com/p/600/400?q=musical%20instruments%20store&color=purple',
    mockupData: {
      stats: [
        { label: 'Ticket Médio', value: 'R$ 1.250,00' },
        { label: 'Guitarras Vendidas', value: '342' },
        { label: 'Estoque Baixo', value: '15 itens' },
      ],
      chartType: 'bar',
    },
  },
  {
    id: 'bi-dre-projetado',
    title: 'Painel de DRE Projetado',
    category: 'bi',
    description: 'Simulações de cenários e projeções financeiras iterativas.',
    image: 'https://img.usecurling.com/p/600/400?q=financial%20projection&color=blue',
    mockupData: {
      stats: [
        { label: 'Projeção Otimista', value: '+15%' },
        { label: 'Cenário Base', value: '+5%' },
        { label: 'Cenário Pessimista', value: '-2%' },
      ],
      chartType: 'line',
    },
  },
  {
    id: 'bi-matriculas',
    title: 'Painel de Indicadores para Acompanhamento de Matrículas',
    category: 'bi',
    description: 'Acompanhamento de funil de captação de alunos para faculdades.',
    image: 'https://img.usecurling.com/p/600/400?q=university%20students&color=green',
    mockupData: {
      stats: [
        { label: 'Leads Gerados', value: '4.500' },
        { label: 'Inscritos Vestibular', value: '1.200' },
        { label: 'Matriculados', value: '850' },
      ],
      chartType: 'pie',
    },
  },
]
