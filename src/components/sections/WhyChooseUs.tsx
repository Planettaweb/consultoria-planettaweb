import { CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const reasons = [
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
    title: 'Mais de 25 Anos de Experiência',
    description:
      'Duas décadas e meia transformando a presença digital de empresas com tecnologia de ponta.',
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500" />,
    title: 'Equipe Especializada',
    description:
      'Profissionais altamente capacitados em desenvolvimento web, sistemas e análise de dados.',
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    title: 'Resultados Rápidos',
    description:
      'Metodologias ágeis que garantem entregas de valor em menor tempo de desenvolvimento.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-orange-500" />,
    title: 'Qualidade Comprovada',
    description:
      'Centenas de projetos entregues com os mais altos padrões de qualidade e segurança do mercado.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden" id="sobre">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Por Que Nos Escolher</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            A Planettaweb combina experiência técnica com visão de negócios para entregar soluções
            que realmente impactam seus resultados e aceleram sua transformação digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-[#0f172a]/50 border-gray-800/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="mb-6 p-4 rounded-xl bg-[#1e293b] inline-block group-hover:scale-110 group-hover:bg-blue-900/20 transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-800/50 bg-[#0f172a]/30 rounded-3xl backdrop-blur-sm">
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
              25+
            </div>
            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
              Anos de Mercado
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
              500+
            </div>
            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
              Projetos Entregues
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
              98%
            </div>
            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
              Clientes Satisfeitos
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
              24/7
            </div>
            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
              Suporte Técnico
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
