import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roberto Almeida',
    role: 'Diretor de Tecnologia, RetailPro',
    content:
      'A parceria com a TechDados transformou nossa operação. Os dashboards implementados nos deram uma visão clara do negócio em tempo real.',
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
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            O que dizem nossos clientes
          </h2>
          <p className="text-blue-200 text-lg">
            A confiança de quem já transformou seus dados em resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/10 backdrop-blur-md text-white">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-6 opacity-50" />
                <p className="text-lg leading-relaxed mb-8 text-blue-50 font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="text-secondary">
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-blue-300">{testimonial.role}</p>
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
