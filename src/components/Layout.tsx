import { Outlet, Link } from 'react-router-dom'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-50 font-sans flex flex-col selection:bg-orange-500/30 selection:text-orange-200">
      <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 tracking-tight hover:scale-105 transition-transform duration-300">
              Planettaweb
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#sobre"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              Sobre
            </a>
            <a
              href="/#servicos"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              Serviços
            </a>
            <a
              href="/#faq"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              FAQ
            </a>
            <a
              href="/#contato"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-gray-800/50 bg-[#0f172a] py-12 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 tracking-tight">
            Planettaweb
          </div>
          <p className="text-gray-400 text-sm md:text-base text-center">
            &copy; {new Date().getFullYear()} Planettaweb. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
