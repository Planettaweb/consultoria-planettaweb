import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roberto Almeida',
    role: 'Diretor de Tecnologia, RetailPro',
    content:
      'A parceria com a Planettaweb transformou nossa operação. Os dashboards implementados nos deram uma visão clara do negócio em tempo real.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
  },
  {
    name: 'Mariana Costa',
    role: 'CEO, HealthTech Inova',
    content:
      'A escalabilidade que alcançamos após a reestruturação do sistema foi impressionante. Equipe técnica impecável e atenta aos detalhes.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
  },
  {
    name: 'Felipe Santos',
    role: 'Gerente de E-commerce, LojaPlus',
    content:
      'A otimização do nosso site resultou em um aumento expressivo nas conversões logo no primeiro mês. Recomendo de olhos fechados.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            O que dizem nossos clientes
          </h2>
          <p className="text-blue-200 text-base md:text-lg">
            A confiança de quem já transformou seus dados em resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/10 backdrop-blur-md text-white h-full"
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-6 opacity-50 shrink-0" />
                <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-blue-50 font-medium flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="text-secondary bg-slate-200">
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
