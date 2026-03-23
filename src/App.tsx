import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import { Layout } from './components/Layout'
import CriacaoDeSites from './pages/servicos/CriacaoDeSites'
import SistemasParaInternet from './pages/servicos/SistemasParaInternet'
import DataAnalysis from './pages/servicos/DataAnalysis'

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/criacao-de-sites" element={<CriacaoDeSites />} />
          <Route path="/servicos/sistemas-para-internet" element={<SistemasParaInternet />} />
          <Route path="/servicos/data-analysis-ia-bi" element={<DataAnalysis />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
