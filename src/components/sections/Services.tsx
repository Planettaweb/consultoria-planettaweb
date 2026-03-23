import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Monitor, CloudCog, Network, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Criação de Sites',
    description: 'Presença digital de alta performance para sua marca.',
    content:
      'Desenvolvemos landing pages e sites corporativos otimizados para conversão e SEO, focados na melhor experiência do usuário e performance técnica.',
    icon: Monitor,
  },
  {
    title: 'Sistemas para Internet',
    description: 'Plataformas robustas e escaláveis sob medida.',
    content:
      'Engenharia de software focada em resolver problemas complexos. Criamos sistemas web personalizados, painéis administrativos e portais B2B/B2C.',
    icon: CloudCog,
  },
  {
    title: 'Data Analysis, IA & BI',
    description: 'Decisões inteligentes guiadas por dados.',
    content:
      'Estruturação de pipelines de dados, dashboards interativos em tempo real e modelos preditivos com Inteligência Artificial para gerar insights valiosos.',
    icon: Network,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 text-lg">
            Soluções tecnológicas completas para modernizar e acelerar a sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white"
              >
                <div className="h-2 w-full bg-slate-100 group-hover:bg-primary transition-colors"></div>
                <CardHeader className="pt-8">
                  <div className="h-14 w-14 rounded-xl bg-secondary/5 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-slate-500">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.content}</p>
                  <a
                    href="#contato"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Saiba Mais{' '}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
