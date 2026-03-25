import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-[#0f172a]/80 p-6 rounded-full border border-gray-800/50 mb-8 animate-float shadow-xl shadow-orange-500/10">
        <Ghost className="h-16 w-16 text-orange-500" />
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-lg">
        4
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
          0
        </span>
        4
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
        Página não encontrada
      </h2>

      <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
        Desculpe, a página que você está procurando não existe ou foi movida para outro endereço em
        nossa consultoria.
      </p>

      <Button
        asChild
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white min-w-[200px] h-14 text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-blue-900/30"
      >
        <Link to="/">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para Home
        </Link>
      </Button>
    </div>
  )
}
