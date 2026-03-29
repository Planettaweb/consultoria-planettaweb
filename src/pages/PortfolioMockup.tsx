import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { portfolioItems } from '@/data/portfolio'
import { SiteMockup } from '@/components/mockups/SiteMockup'
import { SystemMockup } from '@/components/mockups/SystemMockup'
import { BIMockup } from '@/components/mockups/BIMockup'
import { ArrowLeft } from 'lucide-react'

export default function PortfolioMockup() {
  const { id } = useParams()
  const item = portfolioItems.find((i) => i.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!item) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center bg-slate-50 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-4">
          Projeto não encontrado
        </h1>
        <p className="text-slate-600 mb-8">
          O caso de sucesso que você está procurando não existe ou foi removido.
        </p>
        <Link
          to="/portfolio"
          className="text-white bg-primary hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Voltar ao Portfólio
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Portfólio
        </Link>
        <div className="mb-8 md:mb-10 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full mb-4 uppercase tracking-wider">
            {item.category === 'site' ? 'Website' : item.category === 'system' ? 'Sistema' : 'BI'}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 tracking-tight">
            {item.title}
          </h1>
          <p className="text-slate-600 text-lg">{item.description}</p>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xl bg-white w-full max-w-[1200px] mx-auto">
          {/* Browser / Window Header */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto flex-1 max-w-sm bg-white px-4 py-1.5 rounded-md text-xs text-slate-500 font-mono shadow-sm flex items-center justify-center gap-2">
              <span className="text-slate-400">🔒</span> {item.id}.planettaweb.com.br
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            {item.category === 'site' && <SiteMockup item={item} />}
            {item.category === 'system' && <SystemMockup item={item} />}
            {item.category === 'bi' && <BIMockup item={item} />}
          </div>
        </div>
      </div>
    </div>
  )
}
