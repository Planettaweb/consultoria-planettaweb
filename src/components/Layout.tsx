import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import logoImg from '@/assets/logo-14b61.png'

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#f59e0b] selection:text-white relative">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1e3a8a] shadow-lg py-3'
            : 'bg-[#1e3a8a]/95 backdrop-blur-sm border-b border-white/5 py-3 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 group"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                scrollToSection('#home')
              }
            }}
          >
            <div className="bg-white rounded-full p-1.5 md:p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src={logoImg}
                alt="Planettaweb Logo"
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#f59e0b] transition-colors">
              Planettaweb
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-200 hover:text-[#f59e0b] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold border-none shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-full px-6"
              onClick={() => scrollToSection('#contato')}
            >
              Entre em contato
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 shrink-0">
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1e3a8a] border-l-[#1e3a8a]/80 text-white p-6 w-[80vw] sm:max-w-sm"
            >
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-xl font-medium text-left text-slate-200 hover:text-[#f59e0b] hover:translate-x-1 transition-all"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="mt-4 pt-8 border-t border-white/10">
                  <Button
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white w-full border-none h-12 text-lg rounded-full"
                    onClick={() => scrollToSection('#contato')}
                  >
                    Entre em contato
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#0f172a] text-white py-12 md:py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-full p-1.5">
              <img src={logoImg} alt="Planettaweb Logo" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Planettaweb</span>
          </div>
          <p className="text-slate-400 max-w-md mb-8 leading-relaxed text-sm md:text-base px-4">
            Transformando dados em resultados tangíveis. Soluções completas em tecnologia e
            consultoria estratégica para impulsionar seu negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-slate-500 hover:text-[#f59e0b] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            © {new Date().getFullYear()} Planettaweb. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}
