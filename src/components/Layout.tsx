import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import logoImg from '@/assets/logo-14b61.png'

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else if (window.location.pathname !== '/') {
        window.location.href = '/' + href
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#f59e0b] selection:text-white relative">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1e3a8a] shadow-lg py-3'
            : 'bg-[#1e3a8a]/95 backdrop-blur-sm border-b border-white/5 py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                scrollToSection('#home')
              }
            }}
          >
            <div className="bg-white rounded-full p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg}
                alt="Planettaweb Logo"
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#f59e0b] transition-colors">
              Planettaweb
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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
              onClick={() => scrollToSection('#contact')}
            >
              Solicitar Consultoria
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
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
                    onClick={() => scrollToSection('#contact')}
                  >
                    Solicitar Consultoria
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

      <footer className="bg-[#0f172a] text-white py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-full p-1.5">
              <img src={logoImg} alt="Planettaweb Logo" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Planettaweb</span>
          </div>
          <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
            Transformando dados em resultados tangíveis. Soluções completas em tecnologia e
            consultoria estratégica para impulsionar seu negócio.
          </p>
          <div className="flex gap-4 mb-8">
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
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Planettaweb. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
