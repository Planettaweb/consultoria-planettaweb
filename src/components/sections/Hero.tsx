import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import heroBg from '@/assets/fundo-75d5f.png'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a]/70 to-[#0a0f1c]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
            Transformando Dados em Resultados
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Consultoria Especializada em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
              Tecnologia e Dados
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in-up leading-relaxed drop-shadow-md"
            style={{ animationDelay: '200ms' }}
          >
            A Planettaweb potencializa o seu negócio através de soluções inteligentes em web,
            sistemas e análise de dados. Mais de 25 anos de experiência entregando excelência.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up pt-4"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white min-w-[200px] h-14 text-lg shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-1 group"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 min-w-[200px] h-14 text-lg backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <a href="#servicos">Conheça nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
