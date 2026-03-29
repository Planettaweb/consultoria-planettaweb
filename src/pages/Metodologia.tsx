import { useState } from 'react'
import {
  BrainCircuit,
  Sparkles,
  Activity,
  Search,
  Wrench,
  Database,
  Laptop,
  Lightbulb,
  PieChart,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 1,
    title: 'Diagnóstico da dor',
    desc: 'Diagnóstico da dor, para entender o que o cliente mais precisa.',
    icon: Activity,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/30',
  },
  {
    id: 2,
    title: 'Análise dos processos',
    desc: 'Análise dos processos que precisam melhorar.',
    icon: Search,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/30',
  },
  {
    id: 3,
    title: 'Serviço personalizado',
    desc: 'Identificação do serviço personalizado.',
    icon: Wrench,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
  },
  {
    id: 4,
    title: 'Engenharia de dados',
    desc: 'Engenharia de dados e Analytics Engineer para definir a arquitetura de dados.',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/30',
  },
  {
    id: 5,
    title: 'Sistemas personalizados',
    desc: 'Desenvolvimento de sistemas personalizados para atender a estratégia e processos operacionais.',
    icon: Laptop,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
  },
  {
    id: 6,
    title: 'Insight e indicadores',
    desc: 'Insight e desenvolvimento de indicadores.',
    icon: Lightbulb,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
  },
  {
    id: 7,
    title: 'Painel de BI',
    desc: 'Elaboração de painel de indicadores com BI.',
    icon: PieChart,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/30',
  },
]

const nodes = [
  { id: 1, x: 25, y: 25 },
  { id: 2, x: 10, y: 50 },
  { id: 3, x: 25, y: 75 },
  { id: 4, x: 50, y: 50 },
  { id: 5, x: 75, y: 25 },
  { id: 6, x: 90, y: 50 },
  { id: 7, x: 75, y: 75 },
]

export default function Metodologia() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0f172a] pt-28 pb-16 lg:pt-36 relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-[#f59e0b]/5 rounded-full blur-[100px] translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-amber-300">
              Metodologia
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Uma jornada interativa estruturada em 8 etapas essenciais para transformar os dados da
            sua empresa em resultados tangíveis e inteligência competitiva.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-start">
          {/* Right Side / Top Side: Interactive Brain */}
          <div className="w-full lg:w-1/2 sticky top-[72px] lg:top-32 z-20 bg-[#0f172a]/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none pb-6 pt-6 lg:pb-0 lg:pt-0 border-b border-white/5 lg:border-none -mx-4 px-4 lg:mx-0 lg:px-0 lg:h-[calc(100vh-16rem)] flex flex-col items-center justify-center rounded-b-3xl lg:rounded-none shadow-lg lg:shadow-none transition-all duration-300">
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-md aspect-square mx-auto">
              {/* SVG Network Base */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-white/5 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                {/* Brain Outline */}
                <path
                  d="M50 10 C25 5, 5 30, 10 55 C15 80, 35 95, 50 95 C65 95, 85 80, 90 55 C95 30, 75 5, 50 10 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                {/* Internal Connections */}
                <path
                  d="M50 10 L25 25 L10 50 L25 75 L50 95 L75 75 L90 50 L75 25 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                />
                <path
                  d="M25 25 L50 50 L75 25 M10 50 L50 50 L90 50 M25 75 L50 50 L75 75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                />
              </svg>

              {/* Glowing Nodes */}
              {nodes.map((node) => {
                const step = steps.find((s) => s.id === node.id)
                const isActive = activeStep === node.id
                return (
                  <div
                    key={node.id}
                    className={cn(
                      'absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full transition-all duration-500 flex items-center justify-center cursor-pointer',
                      isActive
                        ? `bg-current shadow-[0_0_25px_currentColor] scale-150 z-30 ${step?.color}`
                        : 'bg-white/10 hover:bg-white/30 z-20 hover:scale-125',
                    )}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onMouseEnter={() => setActiveStep(node.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current" />
                    )}
                    <span className="text-[10px] font-bold text-white/90 absolute">{node.id}</span>
                  </div>
                )
              })}

              {/* AI Core (Base) */}
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 animate-pulse blur-xl absolute" />
                <BrainCircuit className="w-8 h-8 text-indigo-400 relative z-10 opacity-70" />
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 lg:hidden text-center max-w-xs px-4">
              Explore o gráfico ou selecione as etapas abaixo.
            </p>
          </div>

          {/* Left Side: Step Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10 lg:pb-12">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = activeStep === step.id
              return (
                <div
                  key={step.id}
                  className={cn(
                    'p-5 md:p-6 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-sm relative overflow-hidden group',
                    isActive
                      ? `bg-[#1e3a8a]/40 ${step.border} shadow-lg transform lg:translate-x-4`
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20',
                  )}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                >
                  {/* Subtle hover gradient */}
                  <div
                    className={cn(
                      'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent to-transparent pointer-events-none',
                      isActive ? step.bg : '',
                    )}
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={cn(
                        'p-3 rounded-xl shrink-0 transition-colors duration-300',
                        isActive ? step.bg : 'bg-white/5 group-hover:bg-white/10',
                      )}
                    >
                      <Icon
                        className={cn(
                          'w-6 h-6',
                          isActive ? step.color : 'text-slate-400 group-hover:text-slate-200',
                        )}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={cn(
                            'text-xs font-bold px-2 py-0.5 rounded-full bg-white/10',
                            isActive ? step.color : 'text-slate-400',
                          )}
                        >
                          Passo {step.id}
                        </span>
                        <h3
                          className={cn(
                            'text-lg font-bold transition-colors',
                            isActive ? 'text-white' : 'text-slate-200',
                          )}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className={cn(
                          'text-sm sm:text-base transition-colors leading-relaxed',
                          isActive ? 'text-slate-300' : 'text-slate-400',
                        )}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Step 8: AI Foundation Banner */}
            <div className="mt-6 md:mt-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-indigo-900/60 to-[#1e3a8a]/40 border border-indigo-500/40 relative overflow-hidden group backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.15)]">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 z-10 text-center sm:text-left">
                <div className="p-4 bg-indigo-500/20 rounded-2xl shrink-0 border border-indigo-500/30">
                  <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 tracking-tight">
                    Inteligência Artificial (IA)
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    <strong className="text-indigo-300 font-semibold">Destaque transversal:</strong>{' '}
                    Todos os serviços utilizando IA para auxiliar, atuando como alicerce para
                    acelerar processos, otimizar análises profundas e trazer previsibilidade real
                    para os resultados do seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
