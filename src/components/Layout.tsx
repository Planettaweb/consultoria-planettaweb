import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu, Database, Linkedin, Twitter, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6',
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Database className="h-6 w-6 text-white" />
            </div>
            <span
              className={cn(
                'text-xl font-bold tracking-tight transition-colors',
                scrolled ? 'text-secondary' : 'text-white',
              )}
            >
              TechDados
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium hover:text-primary transition-colors',
                  scrolled ? 'text-slate-600' : 'text-white/90',
                )}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <a href="#contato">Fale Conosco</a>
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(scrolled ? 'text-slate-800' : 'text-white')}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" /> TechDados
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="mt-4 w-full">
                  <a href="#contato" onClick={() => setIsOpen(false)}>
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white tracking-tight">TechDados</span>
            </div>
            <p className="text-sm text-slate-400">
              Transformando dados em resultados tangíveis para o seu negócio através de tecnologia
              de ponta.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>contato@techdados.com</li>
              <li>(11) 99999-9999</li>
              <li>Av. Paulista, 1000 - SP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} TechDados Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
