import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutGrid } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const bgImg = '/fundo-75d5f.png'

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgImg})`, backgroundColor: '#0f172a' }}
      />

      <div className="absolute inset-0 z-0 bg-[#1e3a8a]/70 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f172a] via-[#1e3a8a]/40 to-transparent" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 md:mb-8 animate-fade-in-up hover:bg-white/20 transition-colors cursor-default">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f59e0b]"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-center">
            Consultoria Planettaweb
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight mb-6 md:mb-8 max-w-5xl animate-fade-in-up drop-shadow-xl"
          style={{ animationDelay: '100ms' }}
        >
          Transforme Dados em{' '}
          <span className="text-[#f59e0b] relative inline-block mt-2 sm:mt-0">
            Resultados
            <svg
              className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-[#f59e0b]/40"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-10 md:mb-12 max-w-3xl animate-fade-in-up font-medium drop-shadow-md leading-relaxed px-2 md:px-0"
          style={{ animationDelay: '200ms' }}
        >
          Potencialize seu negócio com estratégias avançadas em tecnologia e análise de dados.
          Descubra o verdadeiro valor da informação.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#contact')}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white border-none h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300 hover:-translate-y-1 rounded-full group w-full sm:w-auto"
          >
            Solicitar Consultoria
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#portfolio')}
            className="border-white/30 text-white bg-white/5 sm:bg-transparent hover:bg-white/10 hover:text-white h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 rounded-full group w-full sm:w-auto"
          >
            Ver Portfólio
            <LayoutGrid className="ml-2 h-4 w-4 md:h-5 md:w-5 opacity-80 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
