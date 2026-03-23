import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MonitorSmartphone, Code2, LineChart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'criacao-sites',
    title: 'Criação de Sites',
    description:
      'Desenvolvimento de sites institucionais, landing pages e e-commerces com design moderno, responsivo e otimizado para conversão.',
    icon: <MonitorSmartphone className="h-10 w-10 text-orange-500" />,
    features: ['Design Responsivo', 'Otimização SEO', 'Alta Performance', 'Foco em Conversão'],
    href: '/criacao-de-sites',
  },
  {
    id: 'sistemas-internet',
    title: 'Sistemas para Internet',
    description:
      'Plataformas web sob medida, portais corporativos e sistemas de gestão (ERP/CRM) desenvolvidos com tecnologias de ponta.',
    icon: <Code2 className="h-10 w-10 text-orange-500" />,
    features: [
      'Arquitetura Escalável',
      'APIs RESTful',
      'Segurança de Dados',
      'Integrações Customizadas',
    ],
    href: '/sistemas-para-internet',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis, IA & BI',
    description:
      'Transforme dados em decisões estratégicas com dashboards interativos, análises preditivas e soluções baseadas em Inteligência Artificial.',
    icon: <LineChart className="h-10 w-10 text-orange-500" />,
    features: ['Dashboards Power BI', 'Machine Learning', 'Análise Preditiva', 'Data Warehouse'],
    href: '/data-analysis-ia-bi',
  },
]

export function Services() {
  return (
    <section className="py-24 bg-[#0f172a]" id="servicos">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nossos Serviços</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Soluções completas e integradas de consultoria em tecnologia para impulsionar a
            transformação digital da sua empresa de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-[#1e293b]/50 border-gray-800/50 backdrop-blur-sm flex flex-col hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-6 p-4 rounded-2xl bg-[#0f172a] w-fit shadow-inner">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base mt-3 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 mt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group h-12 text-base shadow-lg shadow-blue-900/20"
                >
                  <Link to={service.href}>
                    Saiba mais
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
