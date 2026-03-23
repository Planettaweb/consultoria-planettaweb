import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CloudCog, ShieldCheck, Server, Layers, Cpu } from 'lucide-react'

export default function SistemasParaInternet() {
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
              <CloudCog className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary">
              Sistemas para Internet
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Desenvolvemos aplicações web sob medida, projetadas para solucionar os desafios
            complexos da sua operação. Nossa engenharia de software foca em construir plataformas
            robustas, escaláveis e perfeitamente integradas aos processos de negócio da sua empresa.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src="https://img.usecurling.com/p/800/600?q=cloud%20computing%20servers&color=blue"
                alt="Sistemas Web Escaláveis"
                className="rounded-2xl object-cover w-full h-full shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">Nossa Expertise</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Cpu className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Desenvolvimento Customizado</strong>
                    <span className="text-slate-600">
                      Sistemas B2B, painéis de gestão e portais corporativos feitos sob medida.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Server className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Escalabilidade em Nuvem</strong>
                    <span className="text-slate-600">
                      Arquiteturas preparadas para crescer junto com a sua demanda de usuários.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Layers className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Integração de APIs</strong>
                    <span className="text-slate-600">
                      Conexão perfeita entre múltiplos sistemas, CRMs, ERPs e ferramentas externas.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <strong className="block text-secondary">Segurança de Dados</strong>
                    <span className="text-slate-600">
                      Protocolos rigorosos e compliance com LGPD para manter suas informações
                      protegidas.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1e3a8a] text-white rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0f172a]/30 mix-blend-multiply"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Precisando de uma solução tecnológica única?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Vamos desenhar juntos o sistema que vai revolucionar a forma como sua empresa
                trabalha.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 rounded-full"
              >
                <Link to="/#contact">Falar com um Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
