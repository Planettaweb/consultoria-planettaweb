import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Monitor, CheckCircle, Smartphone, Search, Zap } from 'lucide-react'

export default function CriacaoDeSites() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium transition-colors mt-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a Home
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Monitor className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary">Criação de Sites</h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Desenvolvemos uma presença digital de alta performance para sua marca. Nossas soluções
            de web design unem estética moderna com arquitetura robusta, garantindo que seu site não
            seja apenas bonito, mas uma verdadeira máquina de vendas e conversão.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">Nossos Pilares</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Smartphone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Mobile-First Design</strong>
                    <span className="text-slate-600">
                      Projetados para oferecer a melhor experiência em smartphones e tablets.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Search className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Otimização SEO</strong>
                    <span className="text-slate-600">
                      Estrutura técnica otimizada para os motores de busca, aumentando tráfego
                      orgânico.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Alta Performance</strong>
                    <span className="text-slate-600">
                      Tempos de carregamento ultrarrápidos, essenciais para a retenção do usuário.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">UX/UI focada em Conversão</strong>
                    <span className="text-slate-600">
                      Layouts estratégicos para guiar o visitante até a ação desejada.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://img.usecurling.com/p/800/600?q=modern%20web%20design&color=blue"
                alt="Criação de Sites Modernos"
                className="rounded-2xl object-cover w-full h-full shadow-lg"
              />
            </div>
          </div>

          <div className="bg-[#1e3a8a] text-white rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f172a]/30 mix-blend-multiply"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para transformar sua presença online?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Fale com nossos especialistas e descubra como podemos criar a plataforma ideal para
                impulsionar seus resultados.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 rounded-full"
              >
                <Link to="/#contact">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
