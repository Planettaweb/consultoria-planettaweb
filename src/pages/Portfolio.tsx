import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Monitor, CloudCog, Network } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sites = portfolioItems.filter((i) => i.category === 'site')
  const systems = portfolioItems.filter((i) => i.category === 'system')
  const bi = portfolioItems.filter((i) => i.category === 'bi')

  const CategorySection = ({ title, icon: Icon, items, description }: any) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">{title}</h2>
      </div>
      <p className="text-slate-600 mb-8 md:text-lg max-w-3xl">{description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item: any) => (
          <Link key={item.id} to={`/portfolio/${item.id}`} className="group block h-full">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden shrink-0 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-auto">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 md:mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Nosso Portfólio
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Mais de 25 anos de experiência transformando desafios em soluções tecnológicas. Explore
            nossos casos de sucesso em diferentes setores e descubra como podemos ajudar sua
            empresa.
          </p>
        </div>

        <CategorySection
          title="Desenvolvimento de Sites"
          icon={Monitor}
          items={sites}
          description="Plataformas web corporativas, catálogos online e portais desenvolvidos sob medida para maximizar a presença digital e atração de clientes."
        />

        <CategorySection
          title="Desenvolvimento de Sistemas"
          icon={CloudCog}
          items={systems}
          description="Aplicações web robustas e sistemas de gestão desenhados para automatizar e escalar processos complexos de negócio."
        />

        <CategorySection
          title="BI e Análise de Dados"
          icon={Network}
          items={bi}
          description="Dashboards interativos e análises profundas que transformam dados brutos em inteligência acionável em tempo real."
        />
      </div>
    </div>
  )
}
