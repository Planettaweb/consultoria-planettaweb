import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const cases = [
  {
    title: 'Aumento de 40% na conversão',
    description: 'Otimização de funil de vendas e UX para e-commerce líder no segmento de varejo.',
    metric: '+40% Conversão',
    image: 'https://img.usecurling.com/p/600/400?q=ecommerce%20dashboard&color=blue',
    tags: ['UX/UI', 'Analytics', 'Web'],
  },
  {
    title: 'Redução de custos de 20%',
    description:
      'Implementação de BI e automação de relatórios gerenciais para indústria de manufatura.',
    metric: '-20% Custos',
    image: 'https://img.usecurling.com/p/600/400?q=data%20analysis&color=cyan',
    tags: ['Power BI', 'Automação', 'Dados'],
  },
  {
    title: 'Escalabilidade em Nuvem',
    description:
      'Migração e reestruturação de infraestrutura para startup de saúde, suportando 10x mais usuários.',
    metric: '10x Crescimento',
    image: 'https://img.usecurling.com/p/600/400?q=cloud%20network&color=blue',
    tags: ['Cloud', 'DevOps', 'Escala'],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            Casos de Sucesso
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Resultados reais alcançados em parceria com nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden shrink-0">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white font-bold px-3 py-1 text-xs md:text-sm shadow-md border-none">
                    {item.metric}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20 font-medium text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-secondary mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-auto">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
