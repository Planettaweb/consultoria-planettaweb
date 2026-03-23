import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serviceData = {
  'criacao-de-sites': {
    title: 'Criação de Sites',
    description:
      'Desenvolvimento de sites institucionais, landing pages e e-commerces com foco absoluto em conversão, performance e experiência do usuário.',
    image: 'https://img.usecurling.com/p/800/500?q=website%20design&color=blue',
    features: [
      'Design Moderno, Exclusivo e Responsivo',
      'Otimização Técnica para Buscadores (SEO)',
      'Alta Performance e Velocidade de Carregamento',
      'Integração com Ferramentas de Marketing e Analytics',
      'Painel Intuitivo de Gerenciamento de Conteúdo',
      'Adequação completa à LGPD',
    ],
  },
  'sistemas-para-internet': {
    title: 'Sistemas para Internet',
    description:
      'Desenvolvimento ágil de plataformas web sob medida, portais corporativos e sistemas de gestão personalizados para escalar seu modelo de negócio.',
    image: 'https://img.usecurling.com/p/800/500?q=software%20development&color=blue',
    features: [
      'Arquitetura Escalável, Modular e Segura',
      'Desenvolvimento de APIs RESTful e Microsserviços',
      'Integração Fluida com Sistemas Legados',
      'Painéis Administrativos Completos e Customizados',
      'Automação Inteligente de Processos de Negócio',
      'Hospedagem em Cloud com Alta Disponibilidade',
    ],
  },
  'data-analysis-ia-bi': {
    title: 'Data Analysis, IA & BI',
    description:
      'Consultoria e soluções inteligentes em análise de dados para transformar informações brutas em decisões estratégicas essenciais para o seu negócio.',
    image: 'https://img.usecurling.com/p/800/500?q=data%20analytics&color=orange',
    features: [
      'Dashboards Interativos e Dinâmicos em Power BI',
      'Desenvolvimento de Modelos de Machine Learning',
      'Análises Preditivas, Descritivas e Estatísticas',
      'Estruturação Completa de Data Warehouse / Data Lake',
      'Pipelines de Engenharia de Dados (ETL/ELT)',
      'Consultoria Especializada em Estratégia de Dados',
    ],
  },
}

type ServiceType = keyof typeof serviceData

export default function ServicePage({ type }: { type: ServiceType }) {
  const data = serviceData[type]
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [type])

  if (!data) return null

  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 md:py-20 animate-fade-in">
      <div className="mb-10">
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-white/5 h-10 px-4 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <div className="space-y-8">
          <div className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400">
            Serviço Especializado
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{data.description}</p>
          <div className="pt-6">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 h-14 px-8 text-lg w-full sm:w-auto transition-transform hover:-translate-y-1"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-gray-800/50 group">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent opacity-90" />
        </div>
      </div>

      <div className="bg-[#0f172a]/50 border border-gray-800/50 rounded-3xl p-8 md:p-16 backdrop-blur-sm shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que está incluso neste serviço?
          </h2>
          <p className="text-gray-400 text-lg">
            Entregamos excelência e soluções completas para garantir o sucesso do seu projeto do
            início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start bg-[#1e293b]/50 p-6 rounded-2xl border border-gray-800/50 hover:border-orange-500/40 hover:bg-[#1e293b] transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-[#0f172a] mr-4 shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-6 w-6 text-orange-500" />
              </div>
              <span className="text-gray-300 font-medium text-lg pt-1 leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
