import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Network, BarChart3, TrendingUp, Lightbulb, Database } from 'lucide-react'

export default function DataAnalysis() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 md:mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a Home
        </Link>
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Network className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Data Analysis, IA & BI
            </h1>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed">
            Transforme dados brutos em inteligência competitiva. Ajudamos sua empresa a implementar
            uma cultura baseada em dados, integrando análises preditivas, dashboards dinâmicos e
            modelos avançados de Inteligência Artificial para guiar decisões precisas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-secondary">Áreas de Atuação</h3>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex gap-3">
                  <BarChart3 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-secondary mb-1">
                      Dashboards de BI Interativos
                    </strong>
                    <span className="text-slate-600 text-sm md:text-base">
                      Visualização de dados clara e em tempo real com ferramentas líderes como Power
                      BI.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-secondary mb-1">Análise Preditiva</strong>
                    <span className="text-slate-600 text-sm md:text-base">
                      Modelos estatísticos que antecipam tendências de mercado e comportamento do
                      cliente.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-secondary mb-1">
                      Integração de IA Generativa
                    </strong>
                    <span className="text-slate-600 text-sm md:text-base">
                      Automatização de análises complexas através de algoritmos de aprendizado de
                      máquina.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Database className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-secondary mb-1">
                      Pipelines de Dados e Data Lakes
                    </strong>
                    <span className="text-slate-600 text-sm md:text-base">
                      Estruturação segura para armazenar e processar grandes volumes de informações.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <img
                src="https://img.usecurling.com/p/800/600?q=business%20intelligence%20dashboard&color=blue"
                alt="Business Intelligence e Inteligência Artificial"
                className="rounded-2xl object-cover w-full h-full shadow-lg aspect-video md:aspect-auto"
              />
            </div>
          </div>

          <div className="bg-[#1e3a8a] text-white rounded-2xl p-6 md:p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f172a]/30 mix-blend-multiply"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Pronto para tomar decisões baseadas em dados?
              </h3>
              <p className="text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Agende uma conversa com nossos especialistas em dados e descubra o verdadeiro valor
                da informação.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-6 md:px-8 h-12 md:h-14 rounded-full w-full sm:w-auto"
              >
                <Link to="/#contact">Agendar Consultoria</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
