import { Target, TrendingUp, Users, Cpu } from 'lucide-react'

const features = [
  {
    title: 'Expertise e Foco',
    description: 'Equipe de especialistas sêniores com vivência real de mercado.',
    icon: Target,
  },
  {
    title: 'Resultados Mensuráveis',
    description: 'Foco absoluto no retorno sobre investimento (ROI) e métricas claras.',
    icon: TrendingUp,
  },
  {
    title: 'Atendimento Personalizado',
    description: 'Mergulhamos no seu negócio para criar soluções sob medida.',
    icon: Users,
  },
  {
    title: 'Tecnologia Moderna',
    description: 'Utilização do que há de mais avançado em cloud e frameworks web.',
    icon: Cpu,
  },
]

export function WhyChooseUs() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 md:mb-6 tracking-tight">
              Por que escolher nossa consultoria?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Nossa abordagem combina profunda expertise técnica com visão estratégica de negócios.
              Não entregamos apenas código; entregamos soluções que geram impacto real e sustentável
              para a sua operação.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1 md:mb-2">{feature.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-0">
            <div className="absolute inset-0 bg-secondary/5 rounded-[2rem] transform rotate-3 scale-105"></div>
            <img
              src="https://img.usecurling.com/p/800/800?q=teamwork&color=blue&dpr=2"
              alt="Equipe trabalhando"
              className="relative rounded-[2rem] shadow-2xl object-cover w-full aspect-square"
            />
            <div className="absolute -bottom-6 left-4 right-4 sm:right-auto md:-left-4 lg:-left-12 lg:-bottom-8 bg-secondary text-white p-6 md:p-8 rounded-2xl shadow-xl border border-white/10 z-10">
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">25+</div>
                <div className="text-xs md:text-sm font-medium leading-tight">
                  Anos de
                  <br />
                  Experiência
                  <br />
                  no Mercado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
