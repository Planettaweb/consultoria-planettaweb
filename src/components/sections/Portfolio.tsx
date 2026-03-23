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
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
            Casos de Sucesso
          </h2>
          <p className="text-slate-600 text-lg">
            Resultados reais alcançados em parceria com nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white font-bold px-3 py-1 text-sm shadow-md border-none">
                    {item.metric}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20 font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
