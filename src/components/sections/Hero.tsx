import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=data%20center&color=blue&dpr=2"
          alt="Data Center Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-slate-950/90"></div>
      </div>

      <div className="container relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up opacity-0">
          Transforme Dados em <span className="text-primary">Resultados</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100 opacity-0">
          Consultoria especializada em tecnologia avançada e análise de dados para escalar o
          crescimento e a eficiência do seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200 opacity-0">
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 text-white shadow-lg shadow-primary/20"
            asChild
          >
            <a href="#contato">Solicitar Consultoria</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-lg h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
            asChild
          >
            <a href="#portfolio">Ver Portfólio</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
