import { useState, useEffect, useRef } from 'react'
import {
  // BrainCircuit,
  Activity,
  Workflow,
  Target,
  Database,
  Code2,
  LineChart,
  PieChart,
  Bot,
  ArrowDown,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const stepsData = [
  {
    id: 1,
    title: 'Diagnóstico da dor',
    desc: 'Entendemos a causa real do problema para atacar o que realmente trava o crescimento.',
    pos: { x: 15, y: 25 },
    icon: Activity,
  },
  {
    id: 2,
    title: 'Análise dos processos que precisam melhorar',
    desc: 'Mapeamos gargalos e ineficiências para transformar operação lenta em fluxo inteligente.',
    pos: { x: 35, y: 12 },
    icon: Workflow,
  },
  {
    id: 3,
    title: 'Identificação do serviço personalizado',
    desc: 'Definimos a solução sob medida para gerar impacto rápido e aderente ao seu negócio.',
    pos: { x: 65, y: 12 },
    icon: Target,
  },
  {
    id: 4,
    title: 'Engenharia de dados e Analytics Engineer',
    desc: 'Estruturamos dados confiáveis para sustentar decisões mais seguras, rápidas e estratégicas.',
    pos: { x: 85, y: 25 },
    icon: Database,
  },
  {
    id: 5,
    title: 'Desenvolvimento de sistemas personalizados',
    desc: 'Criamos soluções digitais alinhadas à estratégia, à operação e à rotina da equipe.',
    pos: { x: 15, y: 75 },
    icon: Code2,
  },
  {
    id: 6,
    title: 'Insight e desenvolvimento de indicadores',
    desc: 'Convertemos dados em indicadores claros que revelam oportunidades e direcionam decisões.',
    pos: { x: 35, y: 88 },
    icon: LineChart,
  },
  {
    id: 7,
    title: 'Elaboração de painel de indicadores com BI',
    desc: 'Entregamos visibilidade executiva em tempo real para acompanhar o que realmente importa.',
    pos: { x: 65, y: 88 },
    icon: PieChart,
  },
  {
    id: 8,
    title: 'Todos os serviços utilizando IA para auxiliar',
    desc: 'Aplicamos IA em toda a jornada para acelerar análises, automatizar tarefas e ampliar resultados.',
    pos: { x: 85, y: 75 },
    icon: Bot,
  },
].sort((a, b) => a.id - b.id)

export default function Metodologia() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const hubRef = useRef<HTMLDivElement>(null)

  // Scroll Spy for Mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'))
            setActiveStep(id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    const elements = document.querySelectorAll('.mobile-step-card')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToHub = () => {
    hubRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 pt-28 pb-20 overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            Metodologia Planettaweb
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up animation-delay-100">
            Jornada das{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              soluções
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
            A Planettaweb transforma dores de negócio em solução com tecnologia e IA. Uma jornada
            interativa em 8 etapas para gerar inteligência competitiva.
          </p>
          <Button
            onClick={scrollToHub}
            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-6 h-auto text-lg animate-fade-in-up animation-delay-200 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Explore a jornada
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* DESKTOP HUB (Hidden on mobile)                                    */}
        {/* ----------------------------------------------------------------- */}
        <div
          ref={hubRef}
          className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[800px] mt-10"
        >
          {/* SVG Connections Canvas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Transversal AI Ring (Background Aura) */}
            <ellipse
              cx="50%"
              cy="50%"
              rx="38%"
              ry="42%"
              className="fill-none stroke-blue-500/10"
              strokeWidth="2"
              strokeDasharray="8 8"
            />

            {/* Lines from center to cards */}
            {stepsData.map((step) => {
              const isActive = activeStep === step.id
              return (
                <line
                  key={`line-${step.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`${step.pos.x}%`}
                  y2={`${step.pos.y}%`}
                  className={cn(
                    'transition-all duration-500',
                    isActive ? 'stroke-cyan-400' : 'stroke-slate-700/50',
                  )}
                  strokeWidth={isActive ? '3' : '1.5'}
                  style={{
                    filter: isActive ? 'drop-shadow(0 0 8px rgba(34,211,238,0.8))' : 'none',
                  }}
                />
              )
            })}
          </svg>

          {/* Central Brain Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping blur-xl"
                style={{ animationDuration: '3s' }}
              />
              <div className="absolute inset-4 rounded-full bg-blue-600/30 blur-lg" />
              <div className="relative z-10 w-28 h-28 rounded-full bg-slate-950 border border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/20" />
                //{' '}
                <BrainCircuit className="w-14 h-14 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <img
                  src="https://planettaweb.com.br/home/assets/cerebro.png"
                  alt="Cérebro IA"
                  className="w-14 h-14 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />
              </div>
            </div>
            <div className="mt-6 px-5 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 tracking-wider uppercase">
                IA Transversal
              </span>
            </div>
          </div>

          {/* Methodology Cards */}
          {stepsData.map((step) => {
            const isActive = activeStep === step.id
            const Icon = step.icon
            return (
              <div
                key={`desktop-card-${step.id}`}
                className={cn(
                  'absolute -translate-x-1/2 -translate-y-1/2 w-[280px] transition-all duration-500 z-10 cursor-pointer group',
                  isActive ? 'scale-105 z-50' : 'scale-100 hover:z-40',
                )}
                style={{ left: `${step.pos.x}%`, top: `${step.pos.y}%` }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div
                  className={cn(
                    'p-5 rounded-2xl backdrop-blur-xl border transition-all duration-500 shadow-2xl relative overflow-hidden',
                    isActive
                      ? 'bg-slate-800/90 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                      : 'bg-slate-900/60 border-white/10 hover:bg-slate-800/70 hover:border-white/20',
                  )}
                >
                  {/* Highlight gradient on active */}
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none',
                      isActive && 'opacity-100',
                    )}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300',
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-slate-300',
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                            Etapa {step.id}
                          </span>
                        </div>
                        <h3
                          className={cn(
                            'font-bold leading-snug transition-colors text-[15px]',
                            isActive ? 'text-white' : 'text-slate-200 group-hover:text-white',
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Expandable Description */}
                    <div
                      className={cn(
                        'grid transition-all duration-500 ease-in-out',
                        isActive
                          ? 'grid-rows-[1fr] opacity-100 mt-4'
                          : 'grid-rows-[0fr] opacity-0 mt-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* MOBILE & TABLET HUB (Hidden on desktop)                           */}
        {/* ----------------------------------------------------------------- */}
        <div className="lg:hidden relative pb-20">
          {/* Sticky Brain Header */}
          <div className="sticky top-[72px] z-40 py-6 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 flex flex-col items-center justify-center mb-8 shadow-lg">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping blur-md"
                style={{ animationDuration: '3s' }}
              />
              <div className="relative z-10 w-12 h-12 rounded-full bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                // <BrainCircuit className="w-6 h-6 text-cyan-300" />
                <img
                  src="https://planettaweb.com.br/home/assets/cerebro.png"
                  alt="Cérebro IA"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-3">
              IA Transversal
            </div>
          </div>

          {/* Cards List */}
          <div className="relative flex flex-col gap-6 max-w-md mx-auto">
            {/* Continuous Vertical AI Line */}
            <div className="absolute left-[39px] top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-blue-500/20 via-cyan-500/30 to-purple-500/20" />

            {stepsData.map((step) => {
              const isActive = activeStep === step.id
              const Icon = step.icon
              return (
                <div
                  key={`mobile-card-${step.id}`}
                  data-id={step.id}
                  className="mobile-step-card relative flex gap-5 items-start px-2 group cursor-pointer"
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                >
                  {/* Connection Node */}
                  <div
                    className={cn(
                      'relative z-10 w-11 h-11 rounded-full border-4 flex items-center justify-center shrink-0 transition-all duration-500 mt-1',
                      isActive
                        ? 'border-cyan-400 bg-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.5)] text-cyan-400'
                        : 'border-slate-800 bg-slate-950 text-slate-500 group-hover:border-slate-700',
                    )}
                  >
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>

                  {/* Card Content */}
                  <div
                    className={cn(
                      'flex-1 p-5 rounded-2xl border transition-all duration-500 backdrop-blur-md',
                      isActive
                        ? 'bg-slate-800/80 border-cyan-500/40 shadow-lg'
                        : 'bg-white/5 border-white/10',
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className={cn('w-5 h-5', isActive ? 'text-cyan-400' : 'text-slate-400')}
                      />
                      <h3
                        className={cn(
                          'text-[15px] font-bold leading-tight',
                          isActive ? 'text-white' : 'text-slate-200',
                        )}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <div
                      className={cn(
                        'grid transition-all duration-500 ease-in-out',
                        isActive
                          ? 'grid-rows-[1fr] opacity-100 mt-3'
                          : 'grid-rows-[0fr] opacity-0 mt-0',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
