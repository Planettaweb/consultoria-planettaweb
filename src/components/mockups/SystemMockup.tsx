import { PortfolioItem } from '@/data/portfolio'
import { LayoutDashboard, Users, Settings, FileText, Bell } from 'lucide-react'

export function SystemMockup({ item }: { item: PortfolioItem }) {
  const data = item.mockupData
  return (
    <div className="flex flex-col md:flex-row h-[700px] w-full bg-slate-50 text-slate-900">
      <aside className="w-full md:w-64 bg-[#0f172a] text-slate-300 flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10 font-bold text-white text-lg truncate">
          {item.title}
        </div>
        <nav className="flex-grow py-4 px-3 space-y-1">
          <div className="flex items-center gap-3 px-3 py-2 bg-white/10 text-white rounded-md cursor-pointer">
            <LayoutDashboard size={18} /> Dashboard
          </div>
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
            <Users size={18} /> Cadastros
          </div>
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
            <FileText size={18} /> Relatórios
          </div>
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
            <Settings size={18} /> Configurações
          </div>
        </nav>
      </aside>
      <main className="flex-grow flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <h2 className="font-semibold text-slate-800">Visão Geral do Sistema</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} className="text-slate-500" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
              <img
                src="https://img.usecurling.com/ppl/thumbnail?gender=female"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>
        <div className="p-6 overflow-auto flex-grow bg-slate-50/50">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {data.stats?.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">
                  {s.label}
                </p>
                <h3 className="text-2xl font-bold text-slate-900">{s.value}</h3>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 font-semibold text-slate-800">
              Registros Recentes
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="bg-slate-50/80 text-slate-500">
                  <tr>
                    <th className="px-5 py-3.5 font-medium">ID</th>
                    <th className="px-5 py-3.5 font-medium">Descrição</th>
                    <th className="px-5 py-3.5 font-medium">Status</th>
                    <th className="px-5 py-3.5 font-medium">Data de Atualização</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 text-slate-500 font-mono">#{1000 + i}</td>
                      <td className="px-5 py-4 text-slate-700">Operação de sistema {i}</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          Ativo
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-500">12/05/2026</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
