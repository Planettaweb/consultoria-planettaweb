import { PortfolioItem } from '@/data/portfolio'

export function SiteMockup({ item }: { item: PortfolioItem }) {
  const data = item.mockupData
  return (
    <div className="w-full h-full bg-white flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div
          className="font-bold text-xl uppercase tracking-tighter"
          style={{ color: `var(--${data.primaryColor}-600, #0f172a)` }}
        >
          {item.title.split(' ')[0]}
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <span>Início</span>
          <span>Sobre</span>
          <span>Serviços</span>
          <span>Contato</span>
        </nav>
        <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 transition-colors text-white rounded-full text-sm font-medium shadow-sm">
          Falar Conosco
        </button>
      </header>
      <main className="flex-grow">
        <section className="relative h-[400px] flex items-center justify-center text-center px-4 overflow-hidden">
          <img
            src={data.heroImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
            <p className="text-lg text-white/80 mb-8">{item.description}</p>
            <button className="px-8 py-3.5 bg-white text-black font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Saiba Mais
            </button>
          </div>
        </section>
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">
              Recursos Exclusivos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features?.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 mx-auto rounded-full bg-slate-50 flex items-center justify-center mb-4 text-xl">
                    ✨
                  </div>
                  <h3 className="font-semibold text-slate-800">{f}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        © {new Date().getFullYear()} {item.title}. Todos os direitos reservados.
      </footer>
    </div>
  )
}
